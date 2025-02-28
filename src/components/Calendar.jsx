import React from "react";
import Event from "./Event";

const Calendar = () => {
	return (
		<div className="Calendar">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Sunday</th>
						<th>Monday</th>
						<th>Tuesday</th>
						<th>Wednesday</th>
						<th>Thursday</th>
						<th>Friday</th>
						<th>Saturday</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="time">8 am</td>
						<Event event="Morning Jog 🏃‍♂️" color="green" />
						<td></td>
						<Event event="Coffee Break ☕" color="pink" />
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<Event event="Bird Watching 🐦" color="blue" />
					</tr>
					<tr>
						<td className="time">9 am</td>
						<td></td>
						<Event event="Tech Talk 💡" color="blue" />
						<td></td>
						<td></td>
						<Event event="Gardening 🌱" color="green" />
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className="time">10 am</td>
						<td></td>
						<td></td>
						<Event event="Meditation Session 🧘‍♀️" color="pink" />
						<td></td>
						<td></td>
						<Event event="Local Farmers Market 🍅" color="green" />
						<td></td>
						<Event event="Library Study 📚" color="blue" />
					</tr>
					<tr>
						<td className="time">11 am</td>
						<Event event="Cooking Class 🍳" color="pink" />
						<td></td>
						<td></td>
						<td></td>
						<Event event="Yoga Class 🧘‍♂️" color="green" />
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className="time">12 pm</td>
						<td></td>
						<Event event="Lunch with Friends 🍽" color="blue" />
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<Event event="Aquarium Visit 🐠" color="pink" />
					</tr>
					<tr>
						<td className="time">1 pm</td>
						<td></td>
						<td></td>
						<Event event="Nature Hike 🌲" color="green" />
						<td></td>
						<td></td>
						<td></td>
						<Event event="Museum Tour 🏛" color="blue" />
						<td></td>
					</tr>
					<tr>
						<td className="time">2 pm</td>
						<Event event="Painting Workshop 🎨" color="pink" />
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<Event event="Tech Meetup 💻" color="green" />
						<td></td>
					</tr>
					<tr>
						<td className="time">3 pm</td>
						<td></td>
						<td></td>
						<Event event="Beach Volleyball 🏐" color="blue" />
						<td></td>
						<td></td>
						<Event event="Afternoon Tea ☕" color="pink" />
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Calendar;
