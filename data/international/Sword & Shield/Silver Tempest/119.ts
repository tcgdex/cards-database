import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Emergency Entry",
			'fr-fr': "Entrée d'Urgence",
			'es-es': "Entrada de Emergencia",
			'it-it': "Entrata d'Emergenza",
			'pt-br': "Entrada Emergencial",
			'de-de': "Noteinsatz"
		},

		effect: {
			'en-us': "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench. If you do, draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n'est pas plein, plutôt que d'ajouter cette carte à votre main, vous pouvez la placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
			'es-es': "Una vez durante tu turno, si has robado este Pokémon de tu baraja al principio de tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca. Si lo haces, roba 3 cartas.",
			'it-it': "Una sola volta durante il tuo turno, se hai pescato questo Pokémon dal tuo mazzo all'inizio del tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina. Se lo fai, pesca tre carte.",
			'pt-br': "Uma vez durante o seu turno, se você tiver comprado este Pokémon do seu baralho no começo do seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
			'de-de': "Einmal während deines Zuges, wenn du zu Beginn deines Zuges dieses Pokémon von deinem Deck gezogen hast und deine Bank nicht voll ist, kannst du es, bevor du es auf deine Hand nimmst, auf deine Bank legen. Wenn du das machst, ziehe 3 Karten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Meteor Mash",
			'fr-fr': "Poing Météore",
			'es-es': "Puño Meteoro",
			'it-it': "Meteorpugno",
			'pt-br': "Meteoro Esmagador",
			'de-de': "Sternenhieb"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Meteor Mash attack does 100 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Poing Météore de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Meteorpugno di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Meteoro Esmagador deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 100
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
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Because the magnetic powers of these Pokémon get stronger in freezing temperatures, Metagross living on snowy mountains are full of energy.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682166,
				tcgplayer: 451773
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682166,
				tcgplayer: 451773
			}
		},
	],
}

export default card
