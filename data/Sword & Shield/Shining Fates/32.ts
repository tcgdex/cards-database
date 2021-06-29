import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Luxio",
		en: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Lixy",
		en: "Shinx"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tombé de Haut",
			en: "Top Entry",
			es: "Entrada Superior",
			it: "Primacima",
			pt: "Entrada Superior",
			de: "Einzug"
		},

		effect: {
			fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc.",
			en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn’t full, before you put it into your hand, you may put it onto your Bench.",
			es: "Una vez durante tu turno, si has robado este Pokémon de tu baraja al principio de tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca.",
			it: "Una sola volta durante il tuo turno, se hai pescato questo Pokémon dal tuo mazzo all’inizio del tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina.",
			pt: "Uma vez durante o seu turno, se você tiver comprado este Pokémon do seu baralho no começo do seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco.",
			de: "Einmal während deines Zuges, wenn du zu Beginn deines Zuges dieses Pokémon von deinem Deck gezogen hast und deine Bank nicht voll ist, bevor du es auf deine Hand nimmst, kannst du es auf deine Bank legen."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup de Pied Ravageur",
			en: "Zap Kick",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card