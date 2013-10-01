describe('QuestionCat controllers', function() {
 
  describe('QuestionListCtrl', function(){
 
    it('should create "questions" model with 3 questions', function() {
      var scope = {},
          ctrl = new QuestionListCtrl(scope);
 
      expect(scope.questions.length).toBe(3);
    });
  });
});