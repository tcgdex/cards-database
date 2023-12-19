import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		de: "Ninjatom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Resent",
				fr: "Ressentiment",
				de: "Nachtragend"
			},
			effect: {
				en: "Once during your opponent's turn, if Shedinja would be Knocked Out by damage from an attack, you may put 4 damage counters on the Attacking Pokémon and each of your opponent's Pokémon that has the same name as the Attacking Pokémon.",
				fr: "Une seule fois lors du prochain tour de votre adversaire, si Munja est mis K.O par les dégâts d'une attaque, vous pouvez placer 4 marqueurs de dégât sur le Pokémon Attaquant ainsi que sur tous les Pokémon de votre adversaire possédant le même nom que le Pokémon Attaquant.",
				de: "Einmal während des Zuges deines Gegners kannst du, wenn Ninjatom durch Schaden eines Angriffs kampfunfähig würde, 4 Schadensmarken auf das Angreifende Pokémon und jedes Pokémon deines Gegners mit demselben Namen wie das Angreifende Pokémon legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Curse and Deceive",
				fr: "Sort traitre",
				de: "Verfluchen und Täuschen"
			},
			effect: {
				en: "Put 3 damage counters on the Defending Pokémon. If Shedinja has any damage counters on it, the Defending Pokémon is now Confused.",
				fr: "Placez 3 marqueurs de dégât sur le Pokémon Défenseur. Si Munja possède des marqueurs de dégât, le Pokémon Défenseur est maintenant Confus.",
				de: "Lege 3 Schadensmarken auf das Verteidigende Pokémon. Wenn auf Ninjatom mindestens 1 Schadensmarke liegt, ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
	],

	description: {
		fr: "Une carapace d'insecte laissée à l'abandon. On dit qu'il vole l'âme de celui qui regarde à l'intérieur."
	}
}

export default card
