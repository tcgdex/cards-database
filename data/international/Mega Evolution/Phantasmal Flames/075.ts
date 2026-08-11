import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Archaludon",
		'fr-fr': "Pondralugon",
		'es-es': "Archaludon",
		'es-mx': "Archaludon",
		'de-de': "Briduradon",
		'it-it': "Archaludon",
		'pt-br': "Archaludon"
	},

	evolveFrom: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'es-mx': "Duraludon",
		'de-de': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [1018],
	hp: 180,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Coated Attack",
			'fr-fr': "Attaque Enrobée",
			'es-es': "Ataque Confitado",
			'es-mx': "Ataque Recubierto",
			'de-de': "Kandierte Attacke",
			'it-it': "Attacco Glassato",
			'pt-br': "Ataque Revestido"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It gathers static electricity from its surroundings. The beams it launches when down on all fours are tremendously powerful.",
	},

	illustrator: "toriyufu",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857650,
				tcgplayer: 662129,
				cardtrader: 356861
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857650,
				tcgplayer: 662129,
				cardtrader: 356861
			}
		},
	],
}

export default card
