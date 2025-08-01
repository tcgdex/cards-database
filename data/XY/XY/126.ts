import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Shadow Circle",
		fr: "Cercle des Ombres",
		es: "Círculo Sombrío",
		it: "Cerchiodombra",
		pt: "Círculo das Sombras",
		de: "Schattenkreis"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chacun des Pokémon auquel de l'Énergie Darkness est attachée (les vôtres et ceux de votre adversaire) n'a pas de Faiblesse.",
		en: "Each Pokémon that has any Darkness Energy attached to it (both yours and your opponent's) has no Weakness.",
		es: "Los Pokémon que tengan alguna Energía Darkness unida a ellos (tanto tuyos como de tu rival) no tienen ninguna Debilidad.",
		it: "I Pokémon che hanno delle Energie Darkness assegnate, sia tuoi che del tuo avversario, non hanno debolezza.",
		pt: "Qualquer Pokémon que possuir alguma Energia Darkness ligada a ele (seu e do seu oponente) não terá Fraqueza.",
		de: "Jedes Pokémon (deine und die deines Gegners), an das Darkness-Energie angelegt ist, hat keine Schwäche."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281463
	}
}

export default card
