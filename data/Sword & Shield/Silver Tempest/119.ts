import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Emergency Entry",
			fr: "Entrée d'Urgence",
			es: "Entrada de Emergencia",
			it: "Entrata d'Emergenza",
			pt: "Entrada Emergencial",
			de: "Noteinsatz"
		},

		effect: {
			en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench. If you do, draw 3 cards.",
			fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n'est pas plein, plutôt que d'ajouter cette carte à votre main, vous pouvez la placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
			es: "Una vez durante tu turno, si has robado este Pokémon de tu baraja al principio de tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca. Si lo haces, roba 3 cartas.",
			it: "Una sola volta durante il tuo turno, se hai pescato questo Pokémon dal tuo mazzo all'inizio del tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina. Se lo fai, pesca tre carte.",
			pt: "Uma vez durante o seu turno, se você tiver comprado este Pokémon do seu baralho no começo do seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
			de: "Einmal während deines Zuges, wenn du zu Beginn deines Zuges dieses Pokémon von deinem Deck gezogen hast und deine Bank nicht voll ist, kannst du es, bevor du es auf deine Hand nimmst, auf deine Bank legen. Wenn du das machst, ziehe 3 Karten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Meteor Mash",
			fr: "Poing Météore",
			es: "Puño Meteoro",
			it: "Meteorpugno",
			pt: "Meteoro Esmagador",
			de: "Sternenhieb"
		},

		effect: {
			en: "During your next turn, this Pokémon's Meteor Mash attack does 100 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Poing Météore de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Meteorpugno di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Meteoro Esmagador deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
