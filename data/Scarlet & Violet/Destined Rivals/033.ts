import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Quilava",
		fr: "Feurisson de Luth",
		de: "Klarins Igelavar",
		it: "Quilava di Armonio",
		es: "Quilava de Eco",
		pt: "Quilava do Ethan",
		'es-mx': "Quilava de Ethan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bonded by the Journey",
			fr: "Unis par le Voyage",
			de: "Reisen verbindet",
			it: "Compagni di Viaggio",
			es: "Unidos por la Aventura",
			pt: "Unidos pela Jornada",
			'es-mx': "Vínculo Aventurero"
		},

		effect: {
			en: "Once during your turn, you may search your deck for an Ethan's Adventure card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Aventure de Luth, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Klarins Abenteuer-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Avventura di Armonio, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Aventura de Eco, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta Aventura do Ethan no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 carta de Aventura de Ethan, mostrarla y ponerla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
