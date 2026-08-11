import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [1011],
	set: Set,

	name: {
		'en-us': "Dipplin",
		'fr-fr': "Pomdramour",
		'es-es': "Dipplin",
		'it-it': "Dipplin",
		'pt-br': "Dipplin",
		'de-de': "Sirapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Coated Attack",
			'fr-fr': "Attaque Enrobée",
			'es-es': "Ataque Confitado",
			'it-it': "Attacco Glassato",
			'pt-br': "Ataque Revestido",
			'de-de': "Kandierte Attacke"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785866,
				tcgplayer: 567239
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785866,
				tcgplayer: 567239
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card
