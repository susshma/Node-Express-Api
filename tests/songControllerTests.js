var should = require('should'),
	sinon = require('sinon');

describe("songs controller tests", function () {
	describe("Post", function() {
		it("should not allow empy title", function () {
			var song = function(song){ this.save() = function (){}};

			var req = {
				body: {
					artist: 'Test new artist'
				}
			}

			var res = {
				status: sinon.spy(),
				send: sinon.spy()
			}
			var songController = require('../controllers/songController')(song);
			songController.post(req, res);

			res.status.calledWith(400).should.equal(true, "bad request" + res.status.args[0][0]);
			res.send.calledWith('Title is required').should.equal(true);
		})
	});
})