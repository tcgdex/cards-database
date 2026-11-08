import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [156],
	set: Set,

	name: {
		'en-us': "Ethan's Quilava",
		'fr-fr': "Feurisson de Luth",
		'de-de': "Klarins Igelavar",
		'it-it': "Quilava di Armonio",
		'es-es': "Quilava de Eco",
		'pt-br': "Quilava do Ethan",
		'es-mx': "Quilava de Ethan"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Ethan's Cyndaquil",
		'fr-fr': "Héricendre de Luth",
		'de-de': "Klarins Feurigel",
		'it-it': "Cyndaquil di Armonio",
		'es-es': "Cyndaquil de Eco",
		'pt-br': "Cyndaquil do Ethan",
		'es-mx': "Cyndaquil de Ethan"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bonded by the Journey",
			'fr-fr': "Unis par le Voyage",
			'de-de': "Reisen verbindet",
			'it-it': "Compagni di Viaggio",
			'es-es': "Unidos por la Aventura",
			'pt-br': "Unidos pela Jornada",
			'es-mx': "Vínculo Aventurero"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for an Ethan's Adventure card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Aventure de Luth, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Klarins Abenteuer-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Avventura di Armonio, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Aventura de Eco, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta Aventura do Ethan no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 carta de Aventura de Ethan, mostrarla y ponerla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'es-mx': "Combustión"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825906,
				tcgplayer: 632855
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825906,
				tcgplayer: 632855
			}
		},
	],
}

export default card
