var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " These are partially written lecture notes for an introductory course to linear algebra. I will be updating this website very frequently in order to ensure that the notes remain up to date with the content being introduced in the linear algebra course I am currently teaching at Temple University. It is very likely that mistakes and typos will be introduced in these notes from time to time. If you spot one, please contact me!  "
},
{
  "id": "sec-solutions",
  "level": "1",
  "url": "sec-solutions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Solutions to systems of linear equations",
  "body": " Solutions to systems of linear equations  I will start by defining what I mean by a linear equation and a system of linear equations. When mathematicians use a mathematical concept, they always mean something very precise. Humpty Dumpty, the character in Lewis Carroll's Through the Looking Glass famously said, \"When I use a word,... it means just what I choose it to mean --- neither more nor less.\" Humpty Dumpty must have been a mathematician. (Lewis Carroll certainly was!) For this reason, it is very important to clearly define a concept before using it, and anyone learning mathematics at any level must pay close attention to what a definition says and to what it does not say. The best way to understand a definition is to find and come up with examples and counter-examples. You should train yourself to always want examples after a definition. If the text that you are reading does not provide one, come up with examples and counter-examples yourself!    A linear equation in the variables is an equation that can be written in the form where are real constants. The real numbers are called the coefficients of the linear equation. If , we say that the linear equation is homogeneous .     The equation is a linear equation in the variables .    The equation is a linear equation in the variables because we can rewrite it in the form . In fact, it is a homogeneous linear equation.    On the other hand, the equation is not linear because it involves the non-linear term . For a similar reason, the equation is not linear either.    Even though may not seem to be a homogeneous linear equation at first sight, note that once we subtract from both sides of the equation we end up with . Therefore, this is a homogeneous linear equation.     A system of linear equations (also called a linear system ) is a finite set of linear equations. The variables occurring in the system are called the unknowns . If all the linear equations in this system are homogeneous, we say that the system itself is homogeneous . Otherwise, we say that the system is called inhomogeneous .    When we write down a system of linear equations, we typically write each of the finitely many equations forming it in a line of their own. For example, is a non-homogeneous system of linear equation with unknowns . It consists of three linear equations: , and .  In general, a system with equations and unknowns can be written in the form This way of writing a linear system is extremely helpful. Each column to the left-hand side of the equal sign corresponds to an unknown. More precisely, the th column corresponds to the variable . The coefficients of the system are the constants , where and . Note that the pair gives you the position of in the linear system above: the coefficient is located in the th row of the th column.  The linear system can be written in the form above by introducing zeros whenever a variable is not present in one of the linear equations forming the system:     A solution to a linear system in the variables is an -tuple that is a solution to every linear equation in the system. This means that for every in the set . The collection of solutions to a linear system is called its solution set .      A linear system is said to be consistent if it has at least one solution. A linear system without solutions is called inconsistent .    Much of what we will be doing in this chapter is learning ways of transforming linear systems into simpler linear systems while preserving the solution set of the initial system.    Two linear systems are said to be equivalent if they have the same solution set.     Let's consider the case of a linear equation in two variables. (If you have a look at the definition of linear systems, you will notice that I never required a linear system to have more than one equation!) For instance, we can consider the equation . There are infinitely many solutions to this equation. Indeed, solving for the equation for , we get . We may now freely choose a real value for , and for each such value, is a solution to the equation. For example, you could choose , and this would force to be , meaning that is a solution to the linear equation. Indeed, . Therefore, equation is a recipe to cook up solutions to our linear equation. When there are infinitely many solutions to linear equations, a recipe like this is the best we can hope for. We call this a parametric solution . In this case, the solution has a single parameter .  When working with systems of at most three variables, we can attempt to visualize the solution sets of our linear systems. I would strongly encourage you to do this as often as possible. This practice will greatly improve your geometric thinking and build your intuition, both of which are invaluable assets in mathematics.  Let's plot the solutions to the equation of our previous example.   Graph of .   Graph of line defined by 2x-3y=1.    f(x,y)=2*x-3*y         It is no surprise that the plot shows a line. But it is clear from this picture that there are infinitely many solutions.  There are a few important operations that we can perform on linear systems that preserve the solution set, i.e. that turn one linear system into an equivalent one. We will be using these operations systematically to simplify any given system. These operations are:   Multiplication of one of the equations by a non-zero constant.    Equation swapping.    Addition of a constant multiple of one equation to another equation in the system.   These three operations are known as elementary row operations .   Consider the following linear system: Let's find all the solutions to this linear system. You may feel tempted to solve the second equation for or and then substitute in the first. That will work. However, for larger systems, that turns out to be a slow and cumbersome method. Since one of our main aims in this first chapter is to find an efficient method to systematically solve systems of linear equations, I will use this particular example to explain how one can use the elementary row operations described above to simplify and solve a linear system. The idea is to eliminate one of the variables of the first equation by adding a suitable multiple of the second equation. An important aspect of this method is that we never move variables to the right-hand side . Let's remove the term from the second equation. In order to do that, we will subtract times the first equation from the second. We get the equivalent linear system We can now multiply the second equation by . This gives us Finally, if we subtract the second equation from the first we obtain Therefore, the solution to our linear system is .  Let's plot both equations of the linear system above in the same Cartesian plane to have a geometrical picture of the situation.  Solution sets of (in blue) and of (in orange).   Graphical representation of the solution sets of 2x-3y=1 and x+y=-1. These are two lines intersecting at a single point.    f(x,y)=2*x-3*y  g(x,y)=x+y            The solution set of is represented by the blue line in the picture above. The solution set of is represented by the orange line. These two lines intersect at precisely one point. That point is necessarily a common solution to these two linear equations. In other words, it is the only solution to the linear system , which we already know to be the point .   You can start to see why geometry may be useful when finding solutions to linear systems. In a system with two equations and two unknowns, three situations may occur:   The lines corresponding to the solution sets of the two equations are not parallel, and so they meet at exactly one point. In this situation, there is exactly one solution to the system.    The lines corresponding to the solution sets of the two equations are parallel and distinct, and so they never meet. In this case, there are no solutions to the system.    The lines corresponding to the solution sets of the two equations are the same line. In this case, there are infinitely many solutions.     A good exercise is to use this insight to prove the following theorem.    Consider the linear system in the unknowns given by where are constants. If , then this system has precisely one solution. If, otherwise, , then this system has either none or infinitely many solutions.    Let's first treat the case where . In this case, either or . We may assume without loss of generality that , because we can always swap the two equations and rename the coefficients. Then the line corresponding to the solution set of the first equation has slope .  Since we are assuming that , it must also be the case that or . It follows that the solution set of is either a vertical line, or a line with slope . All we need to do now is to show that the lines and intersect at a single point. It will suffice to show that they are not parallel.  If is a vertical line, then it is clear that and are not parallel because is not vertical. The other situation is that where and has slope . If the lines and were parallel, then their slopes would match: . But this is equivalent to , which contradicts our assumption. Therefore, and cannot be parallel and therefore meet at exactly one point.  Let's now assume that . First, we should deal with two degenerate situations. The first occurs when . If both and are also , then the system has infinitely many solutions. But if one of the is not , then the system is inconsistent.  The second degenerate situation occurs when either or , but not both. Say that (the other case is dealt with in a similar manner). If , the first equation is then and imposes no conditions. The solution set will therefore be the line defined by the second linear equation, yielding infinitely many solutions. On the other hand, if , there are no solutions.  Finally, the non-degenerate case is that where the solution set of each linear equation is a line. Let's first assume that . Then the solution set of the first equation is a vertical line. Since , we must have as well, and the solution set of the second equation must also be a vertical line. They are either parallel (no solutions), or they are exactly the same line (infinitely many solutions).  If , then the slope of is . Since , if , then , contradicting the hypothesis that we are not in a degenerate case. The slope of is then . Since , the two slopes are then equal, and so the solution sets are either parallel and distinct (no solutions), or are the same (infinitely many solutions).    Once you learn about Jordan--Gauss elimination, you will be able to give a purely algebraic proof of the statement above. In fact, this will be one of the exercises in one of your problem sheets. But I strongly encourage you to study the geometric proof above. A good geometric intuition is an invaluable tool for a mathematician.   A few remarks about this theorem are in order.   This theorem says that the solution set of a linear systems like the one above is either empty (i.e. no solutions), infinite or consists of a single point. There is no linear system with two equations and two variables that has exactly two solutions. If you can find two solutions, you can find infinitely many. Actually, this property is true of every > linear system. (See Theorem )    Another curious aspect of this theorem is that it tells us that we can decide whether the system has exactly one solution or not simply by looking at the coefficients on the left-hand side of the equal signs. This means that and are irrelevant to the question of whether the system has exactly one solution. However, they are important when determining whether the system has none or infinitely many solutions. Again, this is a special case of a phenomenon that holds true for more general linear systems.      For the remainder of the section, we will see a few more instances of the following theorem in systems with three equations. We will see a proof of this result much later in the course.    The solution set of a linear system is either empty, infinite or consists of a single point.     Consider the linear system given by Dividing both sides of the last equation by , we immediately get . We can now subtract the equation from the second equation to get Dividing both sides of the second equation by , we get . Finally, we can subtract each side of from each side of the first equation, and also add each side of to each side of the same first equation. We obtain So, the only solution to this linear system is .  Geometrically, this is the intersection of three planes. The first plane is given by the equation . We will see later in the course that this is the only plane that is perpendicular to the vector and that contains the origin. The second plane is defined by the equation , and the third plane by . The only point of intersection of these three planes is the point that we found above.    Let's now find all the solutions to the linear system Note that the expression is twice the expression . Therefore, if we multiply both sides of the first equation by and subtract each side from each side of the first equation, we end up with the second equation being , which is clearly absurd. This means that this linear system has no solutions.  Geometrically, the solution set of describes a plane that is parallel and distinct to the plane formed by the solution set of . Therefore, they never intersect, so there is no common solution.    The next linear system is an example of a linear system of three linear equations in three variables that has no solutions but where, unlike the previous example, the system formed by any two equations has infinitely many solutions: Our first move will be to subtract the last equation from the second one. We obtain the equivalent system It is immediately clear from this new system that there are no solutions, since the first two equations are contradictory. However, looking back at our original system, it is easy to see that any two equations have infinitely many solutions. Take for example the first two: This is a linear system with two equations and three unknowns. Note that if we allow be any real number , then we always get a solution. Indeed, we only need to set and . In other words, the triple is always a solution to the linear system , independently of the real number that we choose.    Our final example in this section will be that of a system linear equations whose solution set is a two-parameter family. This will be a system of two linear equations on the variables . Subtracting each side of the second equation from each side of the first, we obtain the equivalent system We can freely set to be any real value , and freely set to be any real value This leads to and . Therefore, the solution set of this system is given by the two-parameter solution .    Let me observe that the parametric solution can be decomposed as . The geometric interpretation of this is the following. The solution set of the system is the plane in that contains the point and is generated by the two vectors and .      Determine which of the following are systems of linear equations. Explain why.                            Give an example of a homogeneous system of linear equations with two equations and two variables. Give an example of an inhomogeneous system of linear equations with two equations and two variables.      Are the linear systems equivalent? Why?      Give an example of a pair of linear systems with two equations and two variables that are not equivalent.      Find the number of solutions to each of the linear systems below.                           "
},
{
  "id": "def-linear-equation",
  "level": "2",
  "url": "sec-solutions.html#def-linear-equation",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A linear equation in the variables is an equation that can be written in the form where are real constants. The real numbers are called the coefficients of the linear equation. If , we say that the linear equation is homogeneous .   "
},
{
  "id": "sec-solutions-4",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-4",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " The equation is a linear equation in the variables .  "
},
{
  "id": "sec-solutions-5",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " The equation is a linear equation in the variables because we can rewrite it in the form . In fact, it is a homogeneous linear equation.  "
},
{
  "id": "sec-solutions-6",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-6",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " On the other hand, the equation is not linear because it involves the non-linear term . For a similar reason, the equation is not linear either.  "
},
{
  "id": "sec-solutions-7",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-7",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Even though may not seem to be a homogeneous linear equation at first sight, note that once we subtract from both sides of the equation we end up with . Therefore, this is a homogeneous linear equation.  "
},
{
  "id": "def-linear-system",
  "level": "2",
  "url": "sec-solutions.html#def-linear-system",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  A system of linear equations (also called a linear system ) is a finite set of linear equations. The variables occurring in the system are called the unknowns . If all the linear equations in this system are homogeneous, we say that the system itself is homogeneous . Otherwise, we say that the system is called inhomogeneous .   "
},
{
  "id": "def-sols-lineqs",
  "level": "2",
  "url": "sec-solutions.html#def-sols-lineqs",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "  A solution to a linear system in the variables is an -tuple that is a solution to every linear equation in the system. This means that for every in the set . The collection of solutions to a linear system is called its solution set .   "
},
{
  "id": "def-consistent",
  "level": "2",
  "url": "sec-solutions.html#def-consistent",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  A linear system is said to be consistent if it has at least one solution. A linear system without solutions is called inconsistent .   "
},
{
  "id": "def-equivalent",
  "level": "2",
  "url": "sec-solutions.html#def-equivalent",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  Two linear systems are said to be equivalent if they have the same solution set.   "
},
{
  "id": "sec-solutions-16",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-16",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": " Let's consider the case of a linear equation in two variables. (If you have a look at the definition of linear systems, you will notice that I never required a linear system to have more than one equation!) For instance, we can consider the equation . There are infinitely many solutions to this equation. Indeed, solving for the equation for , we get . We may now freely choose a real value for , and for each such value, is a solution to the equation. For example, you could choose , and this would force to be , meaning that is a solution to the linear equation. Indeed, . Therefore, equation is a recipe to cook up solutions to our linear equation. When there are infinitely many solutions to linear equations, a recipe like this is the best we can hope for. We call this a parametric solution . In this case, the solution has a single parameter .  When working with systems of at most three variables, we can attempt to visualize the solution sets of our linear systems. I would strongly encourage you to do this as often as possible. This practice will greatly improve your geometric thinking and build your intuition, both of which are invaluable assets in mathematics.  Let's plot the solutions to the equation of our previous example.   Graph of .   Graph of line defined by 2x-3y=1.    f(x,y)=2*x-3*y         It is no surprise that the plot shows a line. But it is clear from this picture that there are infinitely many solutions. "
},
{
  "id": "sec-solutions-17",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "sec-solutions-18",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-18",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": " Consider the following linear system: Let's find all the solutions to this linear system. You may feel tempted to solve the second equation for or and then substitute in the first. That will work. However, for larger systems, that turns out to be a slow and cumbersome method. Since one of our main aims in this first chapter is to find an efficient method to systematically solve systems of linear equations, I will use this particular example to explain how one can use the elementary row operations described above to simplify and solve a linear system. The idea is to eliminate one of the variables of the first equation by adding a suitable multiple of the second equation. An important aspect of this method is that we never move variables to the right-hand side . Let's remove the term from the second equation. In order to do that, we will subtract times the first equation from the second. We get the equivalent linear system We can now multiply the second equation by . This gives us Finally, if we subtract the second equation from the first we obtain Therefore, the solution to our linear system is .  Let's plot both equations of the linear system above in the same Cartesian plane to have a geometrical picture of the situation.  Solution sets of (in blue) and of (in orange).   Graphical representation of the solution sets of 2x-3y=1 and x+y=-1. These are two lines intersecting at a single point.    f(x,y)=2*x-3*y  g(x,y)=x+y            The solution set of is represented by the blue line in the picture above. The solution set of is represented by the orange line. These two lines intersect at precisely one point. That point is necessarily a common solution to these two linear equations. In other words, it is the only solution to the linear system , which we already know to be the point .  "
},
{
  "id": "thm-linsys-twoeqs",
  "level": "2",
  "url": "sec-solutions.html#thm-linsys-twoeqs",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "",
  "body": "  Consider the linear system in the unknowns given by where are constants. If , then this system has precisely one solution. If, otherwise, , then this system has either none or infinitely many solutions.    Let's first treat the case where . In this case, either or . We may assume without loss of generality that , because we can always swap the two equations and rename the coefficients. Then the line corresponding to the solution set of the first equation has slope .  Since we are assuming that , it must also be the case that or . It follows that the solution set of is either a vertical line, or a line with slope . All we need to do now is to show that the lines and intersect at a single point. It will suffice to show that they are not parallel.  If is a vertical line, then it is clear that and are not parallel because is not vertical. The other situation is that where and has slope . If the lines and were parallel, then their slopes would match: . But this is equivalent to , which contradicts our assumption. Therefore, and cannot be parallel and therefore meet at exactly one point.  Let's now assume that . First, we should deal with two degenerate situations. The first occurs when . If both and are also , then the system has infinitely many solutions. But if one of the is not , then the system is inconsistent.  The second degenerate situation occurs when either or , but not both. Say that (the other case is dealt with in a similar manner). If , the first equation is then and imposes no conditions. The solution set will therefore be the line defined by the second linear equation, yielding infinitely many solutions. On the other hand, if , there are no solutions.  Finally, the non-degenerate case is that where the solution set of each linear equation is a line. Let's first assume that . Then the solution set of the first equation is a vertical line. Since , we must have as well, and the solution set of the second equation must also be a vertical line. They are either parallel (no solutions), or they are exactly the same line (infinitely many solutions).  If , then the slope of is . Since , if , then , contradicting the hypothesis that we are not in a degenerate case. The slope of is then . Since , the two slopes are then equal, and so the solution sets are either parallel and distinct (no solutions), or are the same (infinitely many solutions).   "
},
{
  "id": "sec-solutions-23",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-23",
  "type": "Remark",
  "number": "1.1.15",
  "title": "",
  "body": " A few remarks about this theorem are in order.   This theorem says that the solution set of a linear systems like the one above is either empty (i.e. no solutions), infinite or consists of a single point. There is no linear system with two equations and two variables that has exactly two solutions. If you can find two solutions, you can find infinitely many. Actually, this property is true of every > linear system. (See Theorem )    Another curious aspect of this theorem is that it tells us that we can decide whether the system has exactly one solution or not simply by looking at the coefficients on the left-hand side of the equal signs. This means that and are irrelevant to the question of whether the system has exactly one solution. However, they are important when determining whether the system has none or infinitely many solutions. Again, this is a special case of a phenomenon that holds true for more general linear systems.     "
},
{
  "id": "thm-sols-gensys",
  "level": "2",
  "url": "sec-solutions.html#thm-sols-gensys",
  "type": "Theorem",
  "number": "1.1.16",
  "title": "",
  "body": "  The solution set of a linear system is either empty, infinite or consists of a single point.   "
},
{
  "id": "sec-solutions-26",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-26",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": " Consider the linear system given by Dividing both sides of the last equation by , we immediately get . We can now subtract the equation from the second equation to get Dividing both sides of the second equation by , we get . Finally, we can subtract each side of from each side of the first equation, and also add each side of to each side of the same first equation. We obtain So, the only solution to this linear system is .  Geometrically, this is the intersection of three planes. The first plane is given by the equation . We will see later in the course that this is the only plane that is perpendicular to the vector and that contains the origin. The second plane is defined by the equation , and the third plane by . The only point of intersection of these three planes is the point that we found above.  "
},
{
  "id": "sec-solutions-27",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-27",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": " Let's now find all the solutions to the linear system Note that the expression is twice the expression . Therefore, if we multiply both sides of the first equation by and subtract each side from each side of the first equation, we end up with the second equation being , which is clearly absurd. This means that this linear system has no solutions.  Geometrically, the solution set of describes a plane that is parallel and distinct to the plane formed by the solution set of . Therefore, they never intersect, so there is no common solution.  "
},
{
  "id": "sec-solutions-28",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-28",
  "type": "Example",
  "number": "1.1.19",
  "title": "",
  "body": " The next linear system is an example of a linear system of three linear equations in three variables that has no solutions but where, unlike the previous example, the system formed by any two equations has infinitely many solutions: Our first move will be to subtract the last equation from the second one. We obtain the equivalent system It is immediately clear from this new system that there are no solutions, since the first two equations are contradictory. However, looking back at our original system, it is easy to see that any two equations have infinitely many solutions. Take for example the first two: This is a linear system with two equations and three unknowns. Note that if we allow be any real number , then we always get a solution. Indeed, we only need to set and . In other words, the triple is always a solution to the linear system , independently of the real number that we choose.  "
},
{
  "id": "sec-solutions-29",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-29",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": " Our final example in this section will be that of a system linear equations whose solution set is a two-parameter family. This will be a system of two linear equations on the variables . Subtracting each side of the second equation from each side of the first, we obtain the equivalent system We can freely set to be any real value , and freely set to be any real value This leads to and . Therefore, the solution set of this system is given by the two-parameter solution .  "
},
{
  "id": "sec-solutions-30",
  "level": "2",
  "url": "sec-solutions.html#sec-solutions-30",
  "type": "Remark",
  "number": "1.1.21",
  "title": "",
  "body": " Let me observe that the parametric solution can be decomposed as . The geometric interpretation of this is the following. The solution set of the system is the plane in that contains the point and is generated by the two vectors and .  "
},
{
  "id": "exercises-ch1-sec1-1",
  "level": "2",
  "url": "sec-solutions.html#exercises-ch1-sec1-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Determine which of the following are systems of linear equations. Explain why.                         "
},
{
  "id": "exercises-ch1-sec1-2",
  "level": "2",
  "url": "sec-solutions.html#exercises-ch1-sec1-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Give an example of a homogeneous system of linear equations with two equations and two variables. Give an example of an inhomogeneous system of linear equations with two equations and two variables.   "
},
{
  "id": "exercises-ch1-sec1-3",
  "level": "2",
  "url": "sec-solutions.html#exercises-ch1-sec1-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Are the linear systems equivalent? Why?   "
},
{
  "id": "exercises-ch1-sec1-4",
  "level": "2",
  "url": "sec-solutions.html#exercises-ch1-sec1-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  Give an example of a pair of linear systems with two equations and two variables that are not equivalent.   "
},
{
  "id": "exercises-ch1-sec1-5",
  "level": "2",
  "url": "sec-solutions.html#exercises-ch1-sec1-5",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Find the number of solutions to each of the linear systems below.                         "
},
{
  "id": "sec-echelon",
  "level": "1",
  "url": "sec-echelon.html",
  "type": "Section",
  "number": "1.2",
  "title": "The reduced row echelon form of a linear system",
  "body": " The reduced row echelon form of a linear system  I already mentioned in the previous section that we will make a systematic use of three operations to reduce a linear system to a simpler equivalent one. These are called elementary row operations . Let me remind you what they are:   Multiplication of an equation in the system by a non-zero constant.    Equation swapping.    Addition of a constant multiple of an equation to another equation.     When solving a linear system of equations, we do not need to carry around all the variables involved. We can instead organize all the coefficients in an array (which we will call a matrix ) where each column corresponds to a variable, except for the last one, which will contain the numbers that appear on the right-hand side of the linear equations that form the system.   Matrix    Matrix whose entry is the number .    If and are positive integers, an  matrix is an array of number with rows and columns. If , then we say that the matrix is a square matrix .    An matrix is usually written in the form where each ( , ) is a (real or complex) number. Note the similarity with the notation that was used to describe a generic linear system in the previous section: is the entry in row and column .   For example, is a matrix whose entries are real numbers.    The matrix is called the  identity matrix . In general, the  identity matrix is the square matrix with 's along the main diagonal and 's everywhere else (i.e. if and if ). For instance, the identity matrix is the matrix    Now consider a system of linear equations in the variables with equations: To this system we will associate the matrix whose entry equals when and equals when : Note that each of the first columns of this matrix corresponds to one variable. So, the first column corresponds to the variable , the second column corresponds to the variable , and so on. The last column is reserved for the 's. Each of the rows corresponds to an equation. I used a vertical line between the th and th column as a visual aid to help us separate the columns associated to the elements of the linear system to the left of the equal signs from those associated to the elements to the right. This is called the augmented matrix associated to the linear system. The use of the term augmented is related to the fact that we assigned a column to the 's.   Implicit in the definition of the augmented matrix associated to a linear system is the fact that an order for the variables has been chosen. Indeed, if we keep the same system but reorder the variables, we may end up with a different matrix. In most of what follows, the chosen order of variables will be obvious. In those cases where it is not, it will be explicitly described.    The augmented matrix associated to the linear system in the variables is the matrix     The augmented matrix associated to the linear system in the variables (in this order) is the matrix     If a set of ordered variables is fixed from the outset, we can conversely go from a matrix with at least two columns to the linear system of equations that has that matrix as its augmented matrix. For example, in the variables the linear system corresponding to is    What you should take away from this discussion is that the information contained in a linear system and in its associated augmented matrix is exactly the same.   Reduced row echelon form   The augmented matrix associated to a linear system is said to be in reduced row echelon form if it satisfies all the following properties:   Every row consists entirely of zeroes or the first non-zero element is a . This is called the row's leading .    All rows consisting entirely of zeroes are grouped together at the bottom of the matrix.    If two consecutive rows do not consist entirely of zeroes, the the leading in the lower of the two occurs farther to the right than the leading in the higher row.    A column containing a leading has zeroes everywhere else.   The columns containing the leading 's are called the pivot columns , and the positions where the 's occur are called the pivot positions . A linear system is said to be in reduced row echelon form if its associated augmented matrix is in reduced row echelon form.     The matrix is in reduced row echelon form. The pivot columns are and and the pivot positions are and . In the variables , the corresponding linear system is The leading variables are and . The remaining variables are called free variables . Free variables can be treated as parameters, i.e. we may assign any real numbers to them and solve the equations in the system with respect to the leading ones. For instance, since is a free variable, we may assign any real number to it. We then necessarily have and . Therefore, the solution set for this system is given parametrically by     Leading and free variables   The variables in a consistent linear system in reduced row echelon form that correspond to pivot columns are called leading variables . The remaining variables are called free variables .    Note that part of the definition of free and leading variables is the requirement that the linear system in question is consistent. If a consistent linear system has free variables, then it will have infinitely many solutions. Indeed, we will be free to assign any real value to these, and the values of the leading variables will then be uniquely determined.  Let's see another example of a linear system with infinitely many solutions.   Consider the linear system . The associated augmented matrix is . It is clear that this system is in reduced row echelon form. The pivot columns are columns and which correspond to variables and , respectively. So, by definition, and are the leading variables and is the free variable. So we know that the system will have infinitely many solutions. The solution set will have to be described parametrically. To do that, we solve every equation with respect to the free variables. We end up with where .     A consistent linear system in reduced row echelon form with equations has at most leading variables.    Each equation corresponds to a row of the associated augmented matrix, and each row has at most one leading variable. Therefore, our system admits at most leading variables.     Consider the matrix . This matrix is in reduced row echelon form. The corresponding linear system in the variables is which obviously has no solutions.    The matrix is also in reduced row echelon form. The corresponding linear system in the variables is which has exactly one solution.   As you can see from the examples above, linear systems in reduced row echelon form are easy to solve. (In a way, they are already solved!) In the next section, you will learn about a procedure known as Gauss--Jordan elimination to transform linear systems into equivalent linear systems in reduced row echelon form.  Before getting into it, let's familiarize ourselves a little bit more with the concept of reduced row echelon form. The most useful examples in this case are those of augmented matrices that are not in reduced row echelon form.   The following matrices are not in reduced row echelon form: .  Column is a pivot column for the first matrix. However, that column contains non-trivial entries away from the pivot position.  The leading in the first row of the second matrix appears in the second column, but the leading in the second row appears in the first column, which clashes with condition of the definition of reduced row echelon form. If the rows were swapped, the matrix would then be in reduced row echelon form.  The third matrix is not in reduced row echelon form for two reasons. First, we find a row consisting entirely of zeroes appearing above non-zero rows. Then the first entry in the last row is not a .  Finally, the only pivot column in the last fourth matrix is column . However, it contains non-zero elements in more than one position.      For each of the following linear systems, find the corresponding augmented matrix. Use the order of variables . You may have to reorder the terms in each equation before attempting to determine the augmented matrix.                            Determine whether each of the following linear systems is in reduced row echelon form. Use the order of variables . For each system that is not in reduced row echelon form, give at least one reason for why that is the case. For each system that is in reduced row echelon form, determine the free and leading variables.                                          "
},
{
  "id": "sec-echelon-2",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-echelon.html#def-matrix",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Matrix.",
  "body": " Matrix    Matrix whose entry is the number .    If and are positive integers, an  matrix is an array of number with rows and columns. If , then we say that the matrix is a square matrix .   "
},
{
  "id": "sec-echelon-6",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-6",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " For example, is a matrix whose entries are real numbers.  "
},
{
  "id": "sec-echelon-7",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-7",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " The matrix is called the  identity matrix . In general, the  identity matrix is the square matrix with 's along the main diagonal and 's everywhere else (i.e. if and if ). For instance, the identity matrix is the matrix   "
},
{
  "id": "sec-echelon-8",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "sec-echelon-9",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-9",
  "type": "Remark",
  "number": "1.2.4",
  "title": "",
  "body": " Implicit in the definition of the augmented matrix associated to a linear system is the fact that an order for the variables has been chosen. Indeed, if we keep the same system but reorder the variables, we may end up with a different matrix. In most of what follows, the chosen order of variables will be obvious. In those cases where it is not, it will be explicitly described.  "
},
{
  "id": "sec-echelon-10",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-10",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " The augmented matrix associated to the linear system in the variables is the matrix   "
},
{
  "id": "sec-echelon-11",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-11",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " The augmented matrix associated to the linear system in the variables (in this order) is the matrix   "
},
{
  "id": "sec-echelon-12",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-12",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " If a set of ordered variables is fixed from the outset, we can conversely go from a matrix with at least two columns to the linear system of equations that has that matrix as its augmented matrix. For example, in the variables the linear system corresponding to is   "
},
{
  "id": "def-echelon",
  "level": "2",
  "url": "sec-echelon.html#def-echelon",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Reduced row echelon form.",
  "body": " Reduced row echelon form   The augmented matrix associated to a linear system is said to be in reduced row echelon form if it satisfies all the following properties:   Every row consists entirely of zeroes or the first non-zero element is a . This is called the row's leading .    All rows consisting entirely of zeroes are grouped together at the bottom of the matrix.    If two consecutive rows do not consist entirely of zeroes, the the leading in the lower of the two occurs farther to the right than the leading in the higher row.    A column containing a leading has zeroes everywhere else.   The columns containing the leading 's are called the pivot columns , and the positions where the 's occur are called the pivot positions . A linear system is said to be in reduced row echelon form if its associated augmented matrix is in reduced row echelon form.   "
},
{
  "id": "sec-echelon-15",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-15",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " The matrix is in reduced row echelon form. The pivot columns are and and the pivot positions are and . In the variables , the corresponding linear system is The leading variables are and . The remaining variables are called free variables . Free variables can be treated as parameters, i.e. we may assign any real numbers to them and solve the equations in the system with respect to the leading ones. For instance, since is a free variable, we may assign any real number to it. We then necessarily have and . Therefore, the solution set for this system is given parametrically by   "
},
{
  "id": "def-leadfreevar",
  "level": "2",
  "url": "sec-echelon.html#def-leadfreevar",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Leading and free variables.",
  "body": " Leading and free variables   The variables in a consistent linear system in reduced row echelon form that correspond to pivot columns are called leading variables . The remaining variables are called free variables .   "
},
{
  "id": "sec-echelon-19",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-19",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": " Consider the linear system . The associated augmented matrix is . It is clear that this system is in reduced row echelon form. The pivot columns are columns and which correspond to variables and , respectively. So, by definition, and are the leading variables and is the free variable. So we know that the system will have infinitely many solutions. The solution set will have to be described parametrically. To do that, we solve every equation with respect to the free variables. We end up with where .  "
},
{
  "id": "lem-nfree",
  "level": "2",
  "url": "sec-echelon.html#lem-nfree",
  "type": "Lemma",
  "number": "1.2.12",
  "title": "",
  "body": "  A consistent linear system in reduced row echelon form with equations has at most leading variables.    Each equation corresponds to a row of the associated augmented matrix, and each row has at most one leading variable. Therefore, our system admits at most leading variables.   "
},
{
  "id": "sec-echelon-21",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-21",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": " Consider the matrix . This matrix is in reduced row echelon form. The corresponding linear system in the variables is which obviously has no solutions.  "
},
{
  "id": "sec-echelon-22",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-22",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": " The matrix is also in reduced row echelon form. The corresponding linear system in the variables is which has exactly one solution.  "
},
{
  "id": "sec-echelon-25",
  "level": "2",
  "url": "sec-echelon.html#sec-echelon-25",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": " The following matrices are not in reduced row echelon form: .  Column is a pivot column for the first matrix. However, that column contains non-trivial entries away from the pivot position.  The leading in the first row of the second matrix appears in the second column, but the leading in the second row appears in the first column, which clashes with condition of the definition of reduced row echelon form. If the rows were swapped, the matrix would then be in reduced row echelon form.  The third matrix is not in reduced row echelon form for two reasons. First, we find a row consisting entirely of zeroes appearing above non-zero rows. Then the first entry in the last row is not a .  Finally, the only pivot column in the last fourth matrix is column . However, it contains non-zero elements in more than one position.  "
},
{
  "id": "exercises-ch1-sec2-1",
  "level": "2",
  "url": "sec-echelon.html#exercises-ch1-sec2-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  For each of the following linear systems, find the corresponding augmented matrix. Use the order of variables . You may have to reorder the terms in each equation before attempting to determine the augmented matrix.                         "
},
{
  "id": "exercises-ch1-sec2-2",
  "level": "2",
  "url": "sec-echelon.html#exercises-ch1-sec2-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Determine whether each of the following linear systems is in reduced row echelon form. Use the order of variables . For each system that is not in reduced row echelon form, give at least one reason for why that is the case. For each system that is in reduced row echelon form, determine the free and leading variables.                                        "
},
{
  "id": "sec-gauss",
  "level": "1",
  "url": "sec-gauss.html",
  "type": "Section",
  "number": "1.3",
  "title": "Gauss-Jordan elimination",
  "body": " Gauss-Jordan elimination  By this point I hope that you are convinced that solutions to linear systems in reduced row echelon form are easy to find. The question now is whether and how we can put a linear system in reduced row echelon form. We can always do so using elementary row operations. The process is known as Gauss-Jordan elimination .  This process consists of several steps. I will describe them now in full generality, but will use a concrete matrix so that we can see how the matrix is changed along the way. Since the purpose of this algorithm is to solve systems of linear equations, I will also display alongside the matrix the corresponding system of linear equations that we get at each step. In practice, we would not write the linear system every step of the way. We would work solely with the matrix, and we would translate the information in the last matrix back in terms of the variables in the initial system.  The linear system\/matrix pair that we will use is .   Step 1. Start by identifying the leftmost column that does not consist entirely of zeroes. If the top entry of that column is a , swap the top row with the first row which has a non-zero entry in that column.  In the augmented matrix above, that is column . Note that the top entry in column is which means that we will need to swap the top row with some another row in order to make the first entry in column be non-zero. Let's go ahead and swap the first two rows. We end up with .   Step 2. The top entry in the column identified in step is non-zero. If that entry is a number , divide the whole top row by .  The first entry in the first column is a , so we will need to divide the top row by . After performing this operation, we obtain .   Step 3. The top row now has a leading . Add multiples of the top row to the rows below to ensure that the only non-zero entry in the column of steps and is the leading in the top row.  Currently, our matrix's first column has a in the first entry, a in the second, and a in the last entry. We need to get rid of that . In order to do that, we take the last row and remove times the first row. We end up with .   Step 4. Now consider the submatrix obtained from the original matrix after removing the top row. Perform steps to on that submatrix.  This is usually the longest step. In our example, the submatrix in question is . The leftmost column with non-zero entries is column , and the top row of that column is already non-zero. This means that we can go immediately to step and divide the top row of the submatrix (second row of original matrix) by . We get . Now we will need to add times the second row of our matrix to the last row. After doing that, we obtain . Finally, we need to multiply the last row of the matrix by to get .   Step 5. Starting in the last row and working upward, add a suitable multiple of each of the lower rows to the ones above to enure that each pivot column only has a in the pivot position and s everywhere else.  We will first add times the last row to the second row, and times the last row to the first one. The new system and matrix that we get are . Now we only need to add times the second row to the first row to get the linear system in reduced row echelon form that we were seeking: .  Now that we have reduced the system to one the reduced row echelon form, we can easily find all the solutions. First note that there are three leading variables, and , and one free variable, . This means that all the solutions to this system of linear equations are given parametrically by where .  The process of Gauss-Jordan elimination can be used to show the following theorem.   Gauss-Jordan elimination   A linear system with variables and equations is equivalent to a linear system with variables and equations in reduced row echelon form. Moreover, a homogeneous linear system with variables and equations is equivalent to a homogeneous linear system with variables and equations.     Let's use Gauss-Jordan elimination to solve . The corresponding augmented matrix is . First, we subtract times the first row from the second and third rows to get: . Next, we multiply the second row by : . Adding , times the second row to the last one, we obtain . Now we multiply the last row by : . We are almost there. We now need to add times the last row to the second one and add the last row to the first row. . Finally, we only need to subtract the second row from the first, and we get the following augmented matrix in reduced row echelon form: . from where we deduce that the only solution to our linear system is .     A homogeneous linear system with more variables than equations has infinitely many solutions.    Let be the number of variables and the number of equations. We have . We know from that this system is equivalent to a homogeneous linear system with equations and variables in reduced row echelon form. So all we need to do is to show that a homogeneous linear system in reduced row echelon form that has more variables than equations admits infinitely many solutions. It will suffice to show that such a system has at least one free variable.  Since such a system is homogeneous, it must be consistent, i.e. it must have at least one solution, namely the trivial solution where all the variables are assigned the value . From we know that this system has at most leading variables, and so the remaining variables are free. By assumption, the number of variables is strictly larger than , so our linear system has at least one free variable, and so will admit infinitely many solutions.       Use Gauss-Jordan elimination to solve the following linear systems of equations.                                               "
},
{
  "id": "thm-gauss",
  "level": "2",
  "url": "sec-gauss.html#thm-gauss",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination   A linear system with variables and equations is equivalent to a linear system with variables and equations in reduced row echelon form. Moreover, a homogeneous linear system with variables and equations is equivalent to a homogeneous linear system with variables and equations.   "
},
{
  "id": "sec-gauss-18",
  "level": "2",
  "url": "sec-gauss.html#sec-gauss-18",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Let's use Gauss-Jordan elimination to solve . The corresponding augmented matrix is . First, we subtract times the first row from the second and third rows to get: . Next, we multiply the second row by : . Adding , times the second row to the last one, we obtain . Now we multiply the last row by : . We are almost there. We now need to add times the last row to the second one and add the last row to the first row. . Finally, we only need to subtract the second row from the first, and we get the following augmented matrix in reduced row echelon form: . from where we deduce that the only solution to our linear system is .  "
},
{
  "id": "thm-homoginf",
  "level": "2",
  "url": "sec-gauss.html#thm-homoginf",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "",
  "body": "  A homogeneous linear system with more variables than equations has infinitely many solutions.    Let be the number of variables and the number of equations. We have . We know from that this system is equivalent to a homogeneous linear system with equations and variables in reduced row echelon form. So all we need to do is to show that a homogeneous linear system in reduced row echelon form that has more variables than equations admits infinitely many solutions. It will suffice to show that such a system has at least one free variable.  Since such a system is homogeneous, it must be consistent, i.e. it must have at least one solution, namely the trivial solution where all the variables are assigned the value . From we know that this system has at most leading variables, and so the remaining variables are free. By assumption, the number of variables is strictly larger than , so our linear system has at least one free variable, and so will admit infinitely many solutions.   "
},
{
  "id": "exercises-ch1-sec3-1",
  "level": "2",
  "url": "sec-gauss.html#exercises-ch1-sec3-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Use Gauss-Jordan elimination to solve the following linear systems of equations.                                             "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors",
  "body": " Vectors  You may be familiar with most of the material in this section. We will review some fairly fundamental properties of vectors in . A vector in is simply an element of , or, in other words, an -tuple . So this definition coincides with the definition of a point in . We use different words when we want to think of these objects in different ways. Whenever I use the word point , you should visualize a dot in . However, vectors are usually represented by an arrow based at the origin and ending in the coordinates given by the vector.   For example, is a vector in . It is graphically represented as follows:   The vector .   The vector 1 comma 2             We will often work with column vectors . This means that instead of writing vectors horizontally, we will write them vertically. For example, the vector will be written as . This is a standard convention in linear algebra. I will explain the reason for this choice after we introduce matrix multiplication in the next section. I will extend this convention to points as well, i.e. from now on I will organize the coordinates of a point vertically.  All vectors have a length, often called the norm .    The norm of the vector is defined to be the number . We denote the norm of by .     The norm of the vector in is .   Note that this notion of norm is consistent with the familiar notions of Euclidean distance and length.  Vectors of norm are called unit vectors . Among all the unit vectors in there is a collection of that are especially important. The unit vectors in are called the standard unit vectors of . To be completely clear regarding their definition, contains exactly standard unit vectors. For each integer between and , the standard unit vector is the only vector with th entry equal to and every other entry equal to .  It is possible to multiply vectors by a scalar , i.e., by a real number. If is a real number and is a vector in , then we define to be the vector . In other words, the th coordinate of is defined to be times the th coordinate of . Geometrically, this corresponds to stretching the vector—if —or contracting it—if ). When , the vector is not altered by multiplication by . If is a negative real number, than the direction of the vector is changed.   For instance, . In the figure below, the vector is represented in blue, and the vector is represented in orange. In the image, the vector is translucent so that it is clear that the representation of is based at the origin.   The vectors and .   The vector 1 comma 2 in blue, and the vector 2 times 1 comma 2 in orange.             It should come as no surprise that these two vectors lie in the same line through the origin. But more on this later.   If is the vector in , we define to be . It is easy to check (do it!) that .  We can also add two vectors in . If are two vectors in , then their sum is the vector whose th coordinate is : .   If and , then . Graphically, the sum of and can be obtained via the parallelogram rule.   The parallelogram rule.   The vector 2 comma 1 in orange, the vector minus 1 comma 1 in blue, and their sum in green.    v=(2,1)  w=(-1,1)  u=v+w              In the figure above, the vector is depicted in orange, the vector in blue, and the sum of the two in green.   We also define to mean , so that if , then .  Since, formally, vector and points in are the same thing, the rules of vector addition allow us to add two points or a point and a vector. By convention, we think of the addition of a vector to a point as another point: point + vector = point. The idea is that the vector represents the displacement of the point.   Let's consider the point in and the vector . Then , and we should think of as the point obtained by displacing the point by the vector .   Displacement of the point by the vector .   The vector minus 1 comma 1, the point 1 comma 1 and the displacement of 1 comma 1 by the vector minus 1 comma 1.    v=(-1,1)  p=(1,1)  q=p+v             In the figure above, the vector is represented in blue, and the point is in green. After adding to the point , we end up with the point , graphically represented in red. The dashed blue arrow is the vector based on the point so that its interpretation as displacement can be clearly seen.    The space is an example of a vector space . It will be a while before we see the formal definition of a vector space, but I will now list a series of properties that make one. Proving that these properties do hold is an instructive exercise that you should attempt. Most of the properties follow immediately from the definitions of scalar multiplication and vector addition. At the very least, you should try out a few examples. I will include proofs for some of the properties that you can use as a source of inspiration.    Associativity of vector addition : for all vectors .  This follows from the associativity of addition of real numbers. What this property says is that if we first add to and then add the result to , the result that we obtain will be the same that we get if we choose to first add and together and then add . Indeed, let . Then, by definition and so . Similarly, we can show that . Since for all due to the associativity property of the addition of real numbers, we conclude that .     Commutativity of vector addition : for all vectors .     Existence of identity element for vector addition : the zero vector in (i.e. the vector in whose entries are all ) satisfies .     Existence of inverse element for vector addition : we have for every vector .     Compatibility of real number multiplication with scalar multiplication : for every vector and real numbers .     Existence of identity for scalar multiplication : we have for every vector .     Distributivity of scalar multiplication with respect to vector addition : for all vectors and any real number .     Distributivity of scalar multiplication with respect to addition of real numbers : for all real numbers and any vector .   We will re-encounter these eight properties later in the course.  The last operation that I need to mention in this section is the dot product between two vectors in the same space. If are two vectors in then the dot product between them, denoted by , is the real number defined by In other words, we multiply the th coordinate of by the th coordinate of for each and then we add all these products together.   Show that if is a vector, then .    Consider the vectors in . Their dot product is .   While it is clearly true that for every vector , you should be aware of the fact that it is possible to have with neither nor be the zero vector. For example, . We will later see that this happens precisely when the vectors are perpendicular to each other.  The following proposition lists a few important properties of the dot product. Showing that these properties hold is not too hard, and you should try to come up with a proof by yourself. If are not able to prove these three properties, do not worry. Just have a look at the proof that I wrote. But try to find an argument yourself first. You will learn a great deal from earnestly trying to do something even if you fail.    The following properties hold for all vectors and all real numbers :    .     .    If is not the zero vector, then .       Let be three vectors in , and let and be two real numbers  The first property is a straightforward consequence of the definition of dot product. Indeed, . Since multiplication is commutative, we have . But the right-hand side of this expression is precisely the definition of .  In order to prove the second property, start by noting that, for , the th coordinate of is . Therefore, . Since , we have , as we wanted.  We will now prove the third and last property in the statement of the proposition. To do that, we will assume that is non-zero. This means that at least one of its coordinates is not zero, i.e. for some . We have by the definition of dot product. Every term in this sum is non-negative because it is a square of a real number. Therefore, . Since , we have , yielding .       Evaluate each of the following expressions.                                Show that if is a vector and is a scalar satisfying , then either or .     Are there real numbers and such that ? Justify your answer.      Find real numbers and such that .     The parametric equation of a line   Consider a line in the plane given by the equation , where and either or . Let be a point in the line . Also, let be a non-zero vector that is parallel to .    Show that if then the point is a point in .    Show that if is another point in , then there exists such that .    What this means is that the line can be described as the set of points of the form where is a point on the line, is a vector parallel to the line, and is a real parameter. This is known as the parametric equation of a line .     ★ Cauchy-Schwarz inequality in   Show that for all vectors .     "
},
{
  "id": "sec-vectors-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "sec-vectors-3",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " For example, is a vector in . It is graphically represented as follows:   The vector .   The vector 1 comma 2            "
},
{
  "id": "sec-vectors-4",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vectors "
},
{
  "id": "sec-vectors-5",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "norm "
},
{
  "id": "def-vector-norm",
  "level": "2",
  "url": "sec-vectors.html#def-vector-norm",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  The norm of the vector is defined to be the number . We denote the norm of by .   "
},
{
  "id": "sec-vectors-7",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-7",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " The norm of the vector in is .  "
},
{
  "id": "sec-vectors-9",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vectors standard unit vectors "
},
{
  "id": "sec-vectors-10",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "sec-vectors-11",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-11",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": " For instance, . In the figure below, the vector is represented in blue, and the vector is represented in orange. In the image, the vector is translucent so that it is clear that the representation of is based at the origin.   The vectors and .   The vector 1 comma 2 in blue, and the vector 2 times 1 comma 2 in orange.             It should come as no surprise that these two vectors lie in the same line through the origin. But more on this later.  "
},
{
  "id": "sec-vectors-14",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-14",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " If and , then . Graphically, the sum of and can be obtained via the parallelogram rule.   The parallelogram rule.   The vector 2 comma 1 in orange, the vector minus 1 comma 1 in blue, and their sum in green.    v=(2,1)  w=(-1,1)  u=v+w              In the figure above, the vector is depicted in orange, the vector in blue, and the sum of the two in green.  "
},
{
  "id": "sec-vectors-17",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-17",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": " Let's consider the point in and the vector . Then , and we should think of as the point obtained by displacing the point by the vector .   Displacement of the point by the vector .   The vector minus 1 comma 1, the point 1 comma 1 and the displacement of 1 comma 1 by the vector minus 1 comma 1.    v=(-1,1)  p=(1,1)  q=p+v             In the figure above, the vector is represented in blue, and the point is in green. After adding to the point , we end up with the point , graphically represented in red. The dashed blue arrow is the vector based on the point so that its interpretation as displacement can be clearly seen.  "
},
{
  "id": "sec-vectors-18",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space "
},
{
  "id": "sec-vectors-19",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product dot product "
},
{
  "id": "sec-vectors-20",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-20",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "",
  "body": " Show that if is a vector, then .  "
},
{
  "id": "sec-vectors-21",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-21",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": " Consider the vectors in . Their dot product is .  "
},
{
  "id": "prop-dot-product",
  "level": "2",
  "url": "sec-vectors.html#prop-dot-product",
  "type": "Proposition",
  "number": "2.1.13",
  "title": "",
  "body": "  The following properties hold for all vectors and all real numbers :    .     .    If is not the zero vector, then .       Let be three vectors in , and let and be two real numbers  The first property is a straightforward consequence of the definition of dot product. Indeed, . Since multiplication is commutative, we have . But the right-hand side of this expression is precisely the definition of .  In order to prove the second property, start by noting that, for , the th coordinate of is . Therefore, . Since , we have , as we wanted.  We will now prove the third and last property in the statement of the proposition. To do that, we will assume that is non-zero. This means that at least one of its coordinates is not zero, i.e. for some . We have by the definition of dot product. Every term in this sum is non-negative because it is a square of a real number. Therefore, . Since , we have , yielding .   "
},
{
  "id": "exercises-chapter2-section1-1",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Evaluate each of the following expressions.                              "
},
{
  "id": "exercises-chapter2-section1-2",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Show that if is a vector and is a scalar satisfying , then either or .  "
},
{
  "id": "exercises-chapter2-section1-3",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Are there real numbers and such that ? Justify your answer.   "
},
{
  "id": "exercises-chapter2-section1-4",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Find real numbers and such that .   "
},
{
  "id": "exercises-chapter2-section1-5",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-5",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "The parametric equation of a line.",
  "body": " The parametric equation of a line   Consider a line in the plane given by the equation , where and either or . Let be a point in the line . Also, let be a non-zero vector that is parallel to .    Show that if then the point is a point in .    Show that if is another point in , then there exists such that .    What this means is that the line can be described as the set of points of the form where is a point on the line, is a vector parallel to the line, and is a real parameter. This is known as the parametric equation of a line .   "
},
{
  "id": "exercises-chapter2-section1-6",
  "level": "2",
  "url": "sec-vectors.html#exercises-chapter2-section1-6",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "★ Cauchy-Schwarz inequality in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " ★ Cauchy-Schwarz inequality in   Show that for all vectors .   "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrices",
  "body": " Matrices  We already discussed matrices briefly when we studied the Gauss--Jordan elimination algorithm. In that setting, the main purpose of assigning a matrix to a linear system was to simplify notation and clarify the operations required to transform the given system into one in reduced row echelon form. However, matrices play a much more important role in linear algebra. As we will soon see, an matrix encodes the information required to describe a particular kind of function from to : a linear map . But before we speak about linear maps, we need to discuss matrix addition and multiplication.  If the number of rows of a matrix is the same as the number of rows of a matrix , and if the same is true of the number of columns, then it is possible to define the sum of and . This sum will also be a matrix with the same number of rows of (and of ) and the same number of columns of (and of ). Let's see the formal description of matrix addition.   Matrix addition   Let and be two positive integers, and let and be two matrices. Recall that this short-hand notation means that the entry in row and column of matrix is , and the entry in row and column of matrix is . The matrix is the matrix whose entry is given by . Visually, .     If and , then .    Vectors of are a special kind of matrix. Indeed, they can be regarded as matrices, i.e. matrices with rows and a single column. Under this interpretation, matrix addition and vector addition are compatible.   We will denote the set of matrices by . So, means that is an matrix.  If is an matrix, then we define to be the matrix . It is easy to check (you should do it!) that , the zero matrix.  It is also possible to multiply matrices by a scalar.    If is a scalar and is an matrix, the matrix is defined to be the matrix . In other words, it is the matrix obtained from by multiplying each entry by .     If , then .    Show that for any matrix .   The properties of matrix addition listed in the following lemma follow almost immediately from the corresponding properties of real number addition, and you should prove them yourself.    Let and be positive real numbers. Let and be matrices and scalars. The following properties hold:    .     .     .     .       Another important operation that one can perform on matrices is that of transposition .   Transpose   If is an matrix, then the transpose of , denoted , is the matrix . In other words, the entry of is defined to be the entry of .     If , then the transpose of is .    If , then the transpose of is .    Regard the vector as a matrix. Then we can consider its transpose .   I want to point out an important subtlety related to Example . As you know, a vector in is simply an ordered collection of real numbers. A single vector may be represented in many different ways. For reasons that are going to become apparent before the end of this section, we chose to represent vectors vertically. However, this is simply a choice and the vector for example, as a vector , is the same as the vector or . (In the same way that the number five may be represented by the Arabic numeral or by the Roman numeral V.) But while and represent the same vector, they do not represent the same matrix. Matrices have a certain number of rows and a certain number of columns, and both these numbers and the entries are important.  This being said, you may sometimes encounter the expressions row vector and column vector . These expressions actually refer to two types of matrices . A row vector is a matrix, while a columns vector is an matrix. As mentioned before, we will choose to represent vectors using column vectors.   If instead of starting with a column vector as in Example we start with a row vector like , then the transpose of is the column vector .   Since the transpose of a matrix is a matrix again, one is able to transpose the transpose! You should have no trouble checking that . In other words, the transpose of a transpose is initial matrix.   Show that if is a matrix, then .   We finally come to the question of matrix multiplication. Matrix multiplication is a curious operation. Some natural properties of real number multiplication simply do not hold in general in the case of matrices. Perhaps the most shocking property not satisfied by matrix multiplication is commutativity. We will soon see that it is not necessarily true that . In fact, it may happen that only the product is defined and that it is not possible to multiply by at all!   Matrix multiplication   Let and be positive integers. If is an matrix and is an matrix, then the product is the matrix whose entry is defined to be .    The definition may not be very transparent when you first read it. Here is a better way of describing . In order to calculate the entry in the th row and th column of , start by considering the vector formed by the th row of the matrix , and also consider the column vector formed by the th column of . The entry in the th row and th column of is then the dot product .   Consider the matrices and . Since has columns and has rows, the product is defined. However, we cannot take the product because the number of columns of is , while the number of rows of is .  Let's calculate . For starters, we know that the product is going to be a matrix: the number of rows matches the number of rows of , while the number of columns is the number of columns of . Let's denote by the entry of . Then is the dot product of the vector formed by the first row of and the one formed by the first column of : . The entry is the dot product of the first row of and the second column of : . Similarly, to compute one must take the dot product between the vector formed by the first row of and the third column of : . We then proceed in a similar manner with the second row of . We eventually find .    provides a first glimpse of the phenomenon I alluded to a few paragraphs ago. Here we have a pair of matrices and for which the product is defined and the product is not. The issue here is that the product of two matrices is only defined if the number of columns of the first matrix equals the number of columns of the second.  If matrix is an matrix and is an matrix, then both and are defined. Yet, even in this situation, we will often have .   Let and . Then , but .   Despite the failure of commutativity in general, there are a few familiar properties that matrix multiplication satisfies. Again, I encourage you to prove the following properties using the definition of matrix multiplication.    Let and be positive integers. Let be an matrix, and two matrices, and an matrix. Let be a scalar. The following properties hold.    and .     .     .     .       As an example, I will prove property number .  Say that the entry of is , that of is , that of is , and that of is . By the definition of matrix multiplication, we have . Therefore, the entry of is . Let's now calculate the entry of and check that it matches the expression for . The entry of is and that of is . It follows that the entry of , which we chose to call is given by the expression , as we wanted.  If you wanted, you could use the interpretation of matrix multiplication as a collection of dot products of the vectors formed by the rows of the first matrix and columns of the second to give an alternative proof of property . Indeed, denote by the th row of and by the th column of . Then, for any and , the entry of is the dot product . This means that for and the entry of is .  Now note that the vector defined by the th column of is precisely , while the vector defined by the th row of is . Therefore, the entry of is the dot product . By the commutativity of the dot product, we conclude that this is the same as .    It should be pointed out that property in is a special case of property . Indeed, multiplying an matrix by a scalar has the same effect as multiplying the matrix by . The matrix above is an example of a member of a family of square matrices called scalar matrices .    An matrix is called a square matrix if , i.e. if it has as many rows as it has columns.  A square matrix is called a diagonal matrix if whenever . In other words, if the only non-zero entries occur along the main diagonal.  A scalar matrix is a diagonal matrix whose entries in the main diagonal are all equal.    If are real numbers, then the diagonal matrix with entries is often denoted by : .   For example, and .   Using this notation, a scalar matrix is a diagonal matrix of the form for some .  Note that multiplication by a scalar matrix boils down to multiplication by the scalar in the main diagonal, i.e. if is the scalar matrix with in the main diagonal, and if is an matrix, then . This means that scalar matrices behave very much like scalars. Using this fact, one can easily deduce property 3 in from property 2.  You may be wondering why matrix multiplication is defined in this convoluted way. After all, adding two matrices is nothing more than adding the corresponding entries. Why isn't matrix multiplication defined that way too?  As I pointed out at the start of this section, an matrix represents a very special type of function from to called a liner map . If we have an matrix and an matrix , then we have two linear maps: on function from to , and another one, , from to . We can therefore form the composition , which turns out to be a linear map. We can then wonder what is the matrix that describes this composition. This matrix is precisely the product . Simply put, the matrix product was defined to ensure that matrix multiplication corresponds to composition of linear maps.  Note that from this perspective it is not surprising that, in general, matrix multiplication is not commutative. Indeed, it is rarely the case that composition of functions commutes!  This is all well and good, but I have yet to tell you how matrices define functions at all. This is our next goal.  The description of the function defined by a matrix is actually very simple. Consider an matrix , and let be a vector in . If we view as a column vector (i.e., as a matrix), we can multiply and together to get a matrix (i.e., another column vector). Thus, represents a vector in . We define the function by setting .   Consider the matrix . Being a matrix, it defines a function . We can describe this function explicitly as follows. Let be a vector in . By definition, we have . So, .  It is instructive to see what happens to the standard unit vectors and of when we hit them with this map. One can easily calculate that . The figure below shows in blue and in orange.   The effect of on the standard unit vectors.   The vectors obtained by rotating the standard unit vectors of r2 by pi over four radians.    v=(sqrt(2)\/2,sqrt(2)\/2)  w=(-sqrt(2)\/2,sqrt(2)\/2)           What we see in the image above is that the vectors and were both rotated radians counterclockwise. In fact, the action of on every vector of is precisely rotation by radians.    The function (i.e. the function that scales every vector by a factor of ) is the same as for the matrix .   Explicitly, the function defined by the matrix is the function that maps the vector to the vector .  Imagine now that I give you a vector in and I ask you whether is in the image of . How would you go about deciding this?  The question that I am asking is whether there is a vector such that , or, explicitly, whether there are real numbers such that . Put differently, whether there are solutions to the system The upshot of this discussion is that we can now look at linear systems from a different perspective. Solving a linear system is equivalent to finding a vector such that where is the matrix formed by the coefficients of the system and .    A linear map , or linear transformation , is a function satisfying:    for every and .     for every .        Let be an matrix and an matrix. Verify that .   The following important result follows immediately from the properties of matrix addition and multiplication and you should attempt to prove it before looking at the proof.    Let be an matrix. The function defined above is a linear map.    We need to show that the two defining properties of a linear map hold form . In order to show this, let and be vectors in and let be a scalar.  By the definition of , we have . But we know that , and since , we conclude that .  Similarly, .    It is also true that every linear map is induced by an matrix, and we could even prove it here, but this section is already quite long and so I will discuss this property in a later section.    Calculate the following expressions.                                    Let be an matrix. Denoting by the th standard unit vector ( ), show that is the th column of .    Consider the matrix . Find a vector such that .    The following is a list of linear maps. For each one for them, find a matrix that induces them.                          Recall that the identity matrix is the diagonal matrix whose entries in the main diagonal are all . Verify that is the identity map.    Show that if are linear maps and , then is a linear map.    Show that if and are linear maps, then the composition is a linear map too.    ★ Show that if is a bijective linear map, then its inverse is a linear map as well.    "
},
{
  "id": "def-matrix-addition",
  "level": "2",
  "url": "sec-matrices.html#def-matrix-addition",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Matrix addition.",
  "body": " Matrix addition   Let and be two positive integers, and let and be two matrices. Recall that this short-hand notation means that the entry in row and column of matrix is , and the entry in row and column of matrix is . The matrix is the matrix whose entry is given by . Visually, .   "
},
{
  "id": "sec-matrices-5",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-5",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " If and , then .  "
},
{
  "id": "sec-matrices-6",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-6",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Vectors of are a special kind of matrix. Indeed, they can be regarded as matrices, i.e. matrices with rows and a single column. Under this interpretation, matrix addition and vector addition are compatible.  "
},
{
  "id": "def-matrix-scalar-multiplication",
  "level": "2",
  "url": "sec-matrices.html#def-matrix-scalar-multiplication",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  If is a scalar and is an matrix, the matrix is defined to be the matrix . In other words, it is the matrix obtained from by multiplying each entry by .   "
},
{
  "id": "sec-matrices-11",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-11",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": " If , then .  "
},
{
  "id": "sec-matrices-12",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-12",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "",
  "body": " Show that for any matrix .  "
},
{
  "id": "lem-matrix-addition-props",
  "level": "2",
  "url": "sec-matrices.html#lem-matrix-addition-props",
  "type": "Lemma",
  "number": "2.2.7",
  "title": "",
  "body": "  Let and be positive real numbers. Let and be matrices and scalars. The following properties hold:    .     .     .     .      "
},
{
  "id": "def-matrix-transposition",
  "level": "2",
  "url": "sec-matrices.html#def-matrix-transposition",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Transpose.",
  "body": " Transpose   If is an matrix, then the transpose of , denoted , is the matrix . In other words, the entry of is defined to be the entry of .   "
},
{
  "id": "sec-matrices-17",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-17",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": " If , then the transpose of is .  "
},
{
  "id": "sec-matrices-18",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-18",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": " If , then the transpose of is .  "
},
{
  "id": "example-transpose-vector",
  "level": "2",
  "url": "sec-matrices.html#example-transpose-vector",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": " Regard the vector as a matrix. Then we can consider its transpose .  "
},
{
  "id": "sec-matrices-22",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-22",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": " If instead of starting with a column vector as in Example we start with a row vector like , then the transpose of is the column vector .  "
},
{
  "id": "sec-matrices-24",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-24",
  "type": "Checkpoint",
  "number": "2.2.13",
  "title": "",
  "body": " Show that if is a matrix, then .  "
},
{
  "id": "def-matrix-multiplication",
  "level": "2",
  "url": "sec-matrices.html#def-matrix-multiplication",
  "type": "Definition",
  "number": "2.2.14",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication   Let and be positive integers. If is an matrix and is an matrix, then the product is the matrix whose entry is defined to be .   "
},
{
  "id": "example-matrix-multiplication-first",
  "level": "2",
  "url": "sec-matrices.html#example-matrix-multiplication-first",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": " Consider the matrices and . Since has columns and has rows, the product is defined. However, we cannot take the product because the number of columns of is , while the number of rows of is .  Let's calculate . For starters, we know that the product is going to be a matrix: the number of rows matches the number of rows of , while the number of columns is the number of columns of . Let's denote by the entry of . Then is the dot product of the vector formed by the first row of and the one formed by the first column of : . The entry is the dot product of the first row of and the second column of : . Similarly, to compute one must take the dot product between the vector formed by the first row of and the third column of : . We then proceed in a similar manner with the second row of . We eventually find .  "
},
{
  "id": "sec-matrices-31",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-31",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": " Let and . Then , but .  "
},
{
  "id": "lem-matrix-multiplication-props",
  "level": "2",
  "url": "sec-matrices.html#lem-matrix-multiplication-props",
  "type": "Lemma",
  "number": "2.2.17",
  "title": "",
  "body": "  Let and be positive integers. Let be an matrix, and two matrices, and an matrix. Let be a scalar. The following properties hold.    and .     .     .     .       As an example, I will prove property number .  Say that the entry of is , that of is , that of is , and that of is . By the definition of matrix multiplication, we have . Therefore, the entry of is . Let's now calculate the entry of and check that it matches the expression for . The entry of is and that of is . It follows that the entry of , which we chose to call is given by the expression , as we wanted.  If you wanted, you could use the interpretation of matrix multiplication as a collection of dot products of the vectors formed by the rows of the first matrix and columns of the second to give an alternative proof of property . Indeed, denote by the th row of and by the th column of . Then, for any and , the entry of is the dot product . This means that for and the entry of is .  Now note that the vector defined by the th column of is precisely , while the vector defined by the th row of is . Therefore, the entry of is the dot product . By the commutativity of the dot product, we conclude that this is the same as .   "
},
{
  "id": "def-square-diagonal",
  "level": "2",
  "url": "sec-matrices.html#def-square-diagonal",
  "type": "Definition",
  "number": "2.2.18",
  "title": "",
  "body": "  An matrix is called a square matrix if , i.e. if it has as many rows as it has columns.  A square matrix is called a diagonal matrix if whenever . In other words, if the only non-zero entries occur along the main diagonal.  A scalar matrix is a diagonal matrix whose entries in the main diagonal are all equal.   "
},
{
  "id": "sec-matrices-37",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-37",
  "type": "Example",
  "number": "2.2.19",
  "title": "",
  "body": " For example, and .  "
},
{
  "id": "sec-matrices-41",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "liner map "
},
{
  "id": "sec-matrices-45",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-45",
  "type": "Example",
  "number": "2.2.20",
  "title": "",
  "body": " Consider the matrix . Being a matrix, it defines a function . We can describe this function explicitly as follows. Let be a vector in . By definition, we have . So, .  It is instructive to see what happens to the standard unit vectors and of when we hit them with this map. One can easily calculate that . The figure below shows in blue and in orange.   The effect of on the standard unit vectors.   The vectors obtained by rotating the standard unit vectors of r2 by pi over four radians.    v=(sqrt(2)\/2,sqrt(2)\/2)  w=(-sqrt(2)\/2,sqrt(2)\/2)           What we see in the image above is that the vectors and were both rotated radians counterclockwise. In fact, the action of on every vector of is precisely rotation by radians.  "
},
{
  "id": "sec-matrices-46",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-46",
  "type": "Example",
  "number": "2.2.22",
  "title": "",
  "body": " The function (i.e. the function that scales every vector by a factor of ) is the same as for the matrix .  "
},
{
  "id": "def-linear-map-euclidean",
  "level": "2",
  "url": "sec-matrices.html#def-linear-map-euclidean",
  "type": "Definition",
  "number": "2.2.23",
  "title": "",
  "body": "  A linear map , or linear transformation , is a function satisfying:    for every and .     for every .      "
},
{
  "id": "sec-matrices-51",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-51",
  "type": "Checkpoint",
  "number": "2.2.24",
  "title": "",
  "body": " Let be an matrix and an matrix. Verify that .  "
},
{
  "id": "prop-matrix-linear-map",
  "level": "2",
  "url": "sec-matrices.html#prop-matrix-linear-map",
  "type": "Proposition",
  "number": "2.2.25",
  "title": "",
  "body": "  Let be an matrix. The function defined above is a linear map.    We need to show that the two defining properties of a linear map hold form . In order to show this, let and be vectors in and let be a scalar.  By the definition of , we have . But we know that , and since , we conclude that .  Similarly, .   "
},
{
  "id": "exercises-matrices-1",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Calculate the following expressions.                                  "
},
{
  "id": "exercises-matrices-2",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Let be an matrix. Denoting by the th standard unit vector ( ), show that is the th column of .  "
},
{
  "id": "exercises-matrices-3",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-3",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Consider the matrix . Find a vector such that .  "
},
{
  "id": "exercises-matrices-4",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-4",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " The following is a list of linear maps. For each one for them, find a matrix that induces them.                        "
},
{
  "id": "exercises-matrices-5",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-5",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Recall that the identity matrix is the diagonal matrix whose entries in the main diagonal are all . Verify that is the identity map.  "
},
{
  "id": "exercises-matrices-6",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-6",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Show that if are linear maps and , then is a linear map.  "
},
{
  "id": "exercises-matrices-7",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-7",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " Show that if and are linear maps, then the composition is a linear map too.  "
},
{
  "id": "exercises-matrices-8",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-8",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " ★ Show that if is a bijective linear map, then its inverse is a linear map as well.  "
},
{
  "id": "sec-linear-dependence",
  "level": "1",
  "url": "sec-linear-dependence.html",
  "type": "Section",
  "number": "2.3",
  "title": "Linear dependence",
  "body": " Linear dependence    Let be vectors in . A linear combination of is an expression of the form , where are real numbers. The scalars are called the coefficients of the linear combination.    The linear combination is the expression itself. Two different linear combinations can give rise to the same vector.   The expression is a linear combination of the vectors , and in . The resulting vector is . Here is a different linear combination of the same vectors that also gives rise to : .    In we saw that it is possible to express in more than one way as linear combination of the vectors and . However, there is only one linear combination of the vectors and that results in . Indeed, the problem is that of finding real numbers and such that . However, , which means that we must have .    Sometimes it is not possible to represent a vector as a linear combination of prescribed vectors. For example, the vector in cannot be represented as a linear combination of the vectors because any linear combination of the vectors and will have as its third coordinate.    shows that sometimes there is at most one way to represent a vector as a linear combination of prescribed vectors. This phenomenon occurs when there are no linear relationships among the vectors that are to be combined.    We say that the vectors are said to be linearly dependent if there exist real numbers , not all zero , such that . If the vectors are not linearly dependent, then we say that they are linearly independent .    The condition that the coefficients of the linear combination above are not all zero in the definition of linear dependence is crucial. Indeed, for any given set of vectors , it is always possible to find a trivial linear combination that represents the zero vector. All we need to do is to choose every coefficient to be : . The vectors are only linearly dependent if there exists a linear combination of these vectors representing the zero vector other than the trivial one. In particular, if you wish to prove that a given set of vectors is linearly independent, all you need to do is to show that if are real numbers such that then all the equal .   If is non-zero, then the set consisting only of is linearly independent. Indeed, if , then we must have because, by assumption, .    The vectors and are linearly dependent. Indeed, .   The standard unit vectors in .   The standard unit vectors of r two.    v=(1,2)  w=(2,4)             The set formed by the vectors and is linearly independent. Indeed, say that are real numbers satisfying . Let's start by evaluating the left-hand side of the equation above: . So we have , which means that and . This shows that and are linearly independent.   The standard unit vectors in .   The standard unit vectors of r two.    e1=(1,0)  e2=(0,1)             The vectors and are linearly independent. To see this, let and be real scalars such that . Then . In other words, we need to solve the system in the variables and . But it is easy to see that the only solution to this system is given by and .   Let me mention an important generalization of . The unit vectors in are called the standard unit vectors of . To be completely clear regarding their definition, contains exactly standard unit vectors. For each integer between and , the standard unit vector is the only vector with th entry equal to and every other entry equal to .    The set of standard unit vectors in is linearly independent.    Let be real numbers. If we denote by the th entry of , then the th entry of is . By the definition of standard unit vectors, we have whenever , and for every . Therefore, the th entry of is . If we suppose that the are such that , we conclude that for every .      Let be a vector in , and let be a set of linearly independent vectors in . Then there is at most one linear combination of these linearly independent vectors such that .    Note that there may well be no linear combination of the linearly independent vectors that represents . The claim is that if there is one, that is the only one. To prove this, suppose that we have two linear combinations of representing : and , where . If we subtract the second linear combination from the first we end up with . Since the set is linearly independent, we must have for all . Put differently, for all . This means that the two linear combinations are actually the same.    To be absolutely clear,  does not say that you will be capable of representing any vector in using linear combinations of a given linearly independent set of vectors. For example, the set consisting of the vector alone is linearly independent. Linear combinations involving only are of the form , where . This means that the only vectors in that can be represented as linear combinations of are of the form . This leaves out vectors like .  What does say is that if it is possible to represent a vector using a linear combination of linearly independent vectors, then there is only one way of doing so.  Linearly independent sets of vectors of that are capable of representing any other vector in are very special and very important in linear algebra. We will discuss these sets in a later section.  Before finishing this section, I will state one more useful result. As with every result in these lecture notes, you should attempt to convince yourself of the truthfulness of the statement before looking at the proof. Sometimes you may be able to prove the results yourself, and you will learn a great deal by doing so. But at the very least, work out a couple of examples. The next lemma, in particular, is relatively easy to prove, so you could regard it as an exercise.    Let be an integer. If is a linearly dependent set of vectors, then at least one of these vectors can be written as a linear combination of the other vectors in the set.    If one of the vectors is the zero vector, then the result is trivial. Indeed, the zero vector can always be expressed as the trivial linear combination (i.e. coefficients are all ) of any finite set of vectors. We are therefore reduced to the case where all the vectors are non-zero.  Suppose that all the vectors are non-zero. Since they are linearly dependent, there is a set of scalars , not all zero, such that . We may assume, without loss of generality, that , because if this is not the case we can just reorder the vectors in the set and the scalars. (In other words, the labels that we assigned to the vectors are completely arbitrary and irrelevant.) But then, Equation is equivalent to . Since , we may divide both sides by , from where we get . In other words, we wrote as a linear combination of the other vectors in the set.       For each subquestion, determine whether the given set of vectors is linearly independent. If not, find a non-trivial linear combination representing the zero vector.                           In each subquestion, you will be given a vector and a list of vectors . Determine whether it is possible to write the vector as a linear combination of the vectors . If it is, find one such linear combination.                                     Consider the vectors and in .    Show that the vectors and are linearly independent.    Find a vector such that the set formed by the vectors and is still linearly independent.    Find a vector such that the set formed by the vectors and is linearly dependent.        Suppose that is a linearly independent set of vectors. Is it possible to find a subset of that is linearly dependent?      Show that two vectors in are linearly independent if and only if one of them is a scalar multiple of the other.      Find an example of a linearly independent set in consisting of more than one vector such that none of them is a scalar multiple of another vector in the set.      ★ Show that if are two non-zero vectors such that , then they are linearly independent.    Use the properties of the dot product to simplify and , where are scalars.      The converse of does not hold. Give an example of two linearly independent vectors in such that .     "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "sec-linear-dependence.html#def-linear-combination",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Let be vectors in . A linear combination of is an expression of the form , where are real numbers. The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ex-lin-comb77",
  "level": "2",
  "url": "sec-linear-dependence.html#ex-lin-comb77",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " The expression is a linear combination of the vectors , and in . The resulting vector is . Here is a different linear combination of the same vectors that also gives rise to : .  "
},
{
  "id": "ex-lin-comb77-unique",
  "level": "2",
  "url": "sec-linear-dependence.html#ex-lin-comb77-unique",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " In we saw that it is possible to express in more than one way as linear combination of the vectors and . However, there is only one linear combination of the vectors and that results in . Indeed, the problem is that of finding real numbers and such that . However, , which means that we must have .  "
},
{
  "id": "sec-linear-dependence-6",
  "level": "2",
  "url": "sec-linear-dependence.html#sec-linear-dependence-6",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": " Sometimes it is not possible to represent a vector as a linear combination of prescribed vectors. For example, the vector in cannot be represented as a linear combination of the vectors because any linear combination of the vectors and will have as its third coordinate.  "
},
{
  "id": "def-linear-independence",
  "level": "2",
  "url": "sec-linear-dependence.html#def-linear-independence",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": "  We say that the vectors are said to be linearly dependent if there exist real numbers , not all zero , such that . If the vectors are not linearly dependent, then we say that they are linearly independent .   "
},
{
  "id": "sec-linear-dependence-10",
  "level": "2",
  "url": "sec-linear-dependence.html#sec-linear-dependence-10",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": " If is non-zero, then the set consisting only of is linearly independent. Indeed, if , then we must have because, by assumption, .  "
},
{
  "id": "sec-linear-dependence-11",
  "level": "2",
  "url": "sec-linear-dependence.html#sec-linear-dependence-11",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": " The vectors and are linearly dependent. Indeed, .   The standard unit vectors in .   The standard unit vectors of r two.    v=(1,2)  w=(2,4)           "
},
{
  "id": "example-standard-units",
  "level": "2",
  "url": "sec-linear-dependence.html#example-standard-units",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": " The set formed by the vectors and is linearly independent. Indeed, say that are real numbers satisfying . Let's start by evaluating the left-hand side of the equation above: . So we have , which means that and . This shows that and are linearly independent.   The standard unit vectors in .   The standard unit vectors of r two.    e1=(1,0)  e2=(0,1)           "
},
{
  "id": "sec-linear-dependence-13",
  "level": "2",
  "url": "sec-linear-dependence.html#sec-linear-dependence-13",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": " The vectors and are linearly independent. To see this, let and be real scalars such that . Then . In other words, we need to solve the system in the variables and . But it is easy to see that the only solution to this system is given by and .  "
},
{
  "id": "sec-linear-dependence-14",
  "level": "2",
  "url": "sec-linear-dependence.html#sec-linear-dependence-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard unit vectors "
},
{
  "id": "lem-standard-ind",
  "level": "2",
  "url": "sec-linear-dependence.html#lem-standard-ind",
  "type": "Lemma",
  "number": "2.3.12",
  "title": "",
  "body": "  The set of standard unit vectors in is linearly independent.    Let be real numbers. If we denote by the th entry of , then the th entry of is . By the definition of standard unit vectors, we have whenever , and for every . Therefore, the th entry of is . If we suppose that the are such that , we conclude that for every .   "
},
{
  "id": "lem-unique-lin-comb",
  "level": "2",
  "url": "sec-linear-dependence.html#lem-unique-lin-comb",
  "type": "Lemma",
  "number": "2.3.13",
  "title": "",
  "body": "  Let be a vector in , and let be a set of linearly independent vectors in . Then there is at most one linear combination of these linearly independent vectors such that .    Note that there may well be no linear combination of the linearly independent vectors that represents . The claim is that if there is one, that is the only one. To prove this, suppose that we have two linear combinations of representing : and , where . If we subtract the second linear combination from the first we end up with . Since the set is linearly independent, we must have for all . Put differently, for all . This means that the two linear combinations are actually the same.   "
},
{
  "id": "lem-lin-dep-comb",
  "level": "2",
  "url": "sec-linear-dependence.html#lem-lin-dep-comb",
  "type": "Lemma",
  "number": "2.3.14",
  "title": "",
  "body": "  Let be an integer. If is a linearly dependent set of vectors, then at least one of these vectors can be written as a linear combination of the other vectors in the set.    If one of the vectors is the zero vector, then the result is trivial. Indeed, the zero vector can always be expressed as the trivial linear combination (i.e. coefficients are all ) of any finite set of vectors. We are therefore reduced to the case where all the vectors are non-zero.  Suppose that all the vectors are non-zero. Since they are linearly dependent, there is a set of scalars , not all zero, such that . We may assume, without loss of generality, that , because if this is not the case we can just reorder the vectors in the set and the scalars. (In other words, the labels that we assigned to the vectors are completely arbitrary and irrelevant.) But then, Equation is equivalent to . Since , we may divide both sides by , from where we get . In other words, we wrote as a linear combination of the other vectors in the set.   "
},
{
  "id": "exercises-chapter2-section2-1",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  For each subquestion, determine whether the given set of vectors is linearly independent. If not, find a non-trivial linear combination representing the zero vector.                         "
},
{
  "id": "exercises-chapter2-section2-2",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " In each subquestion, you will be given a vector and a list of vectors . Determine whether it is possible to write the vector as a linear combination of the vectors . If it is, find one such linear combination.                                  "
},
{
  "id": "exercises-chapter2-section2-3",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  Consider the vectors and in .    Show that the vectors and are linearly independent.    Find a vector such that the set formed by the vectors and is still linearly independent.    Find a vector such that the set formed by the vectors and is linearly dependent.     "
},
{
  "id": "exercises-chapter2-section2-4",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  Suppose that is a linearly independent set of vectors. Is it possible to find a subset of that is linearly dependent?   "
},
{
  "id": "exercises-chapter2-section2-5",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  Show that two vectors in are linearly independent if and only if one of them is a scalar multiple of the other.   "
},
{
  "id": "exercises-chapter2-section2-6",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  Find an example of a linearly independent set in consisting of more than one vector such that none of them is a scalar multiple of another vector in the set.   "
},
{
  "id": "exercise-ortho-lin-ind",
  "level": "2",
  "url": "sec-linear-dependence.html#exercise-ortho-lin-ind",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "  ★ Show that if are two non-zero vectors such that , then they are linearly independent.    Use the properties of the dot product to simplify and , where are scalars.   "
},
{
  "id": "exercises-chapter2-section2-8",
  "level": "2",
  "url": "sec-linear-dependence.html#exercises-chapter2-section2-8",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "  The converse of does not hold. Give an example of two linearly independent vectors in such that .   "
},
{
  "id": "sec-linear-subspaces",
  "level": "1",
  "url": "sec-linear-subspaces.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear subspaces",
  "body": " Linear subspaces    "
},
{
  "id": "sec-linear-maps",
  "level": "1",
  "url": "sec-linear-maps.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear maps",
  "body": " Linear maps    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
