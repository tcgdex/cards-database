import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Alakazam",
		pt: "Alakazam",
		fr: "Alakazam",
		de: "Simsala"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kadabra",
		pt: "Kadabra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Damage Swap",
				pt: "Troca de Dano",
				fr: "Transfert de dégâts",
				de: "Schadenstausch"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
				pt: "Como você quiser durante o seu turno (antes de atacar), você pode mover 1 marcador de dano de 1 de seus Pokémon para outro, desde que você não cause a morte desse Pokémon. Este poder não pode ser usado se Alakazam está Adormecido, Confuso ou Paralisado.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 de vos Pokémon vers un autre sous réserve de ne pas mettre ce Pokémon K.O. Ce pouvoir ne peut être utilisé si Alakazam est Endormi, Confus ou Paralysé.",
				de: "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft eine Schadensmarke von einem Deiner Pokémon auf ein anderes verschieben, solange Du dieses Pokémon nicht kampfunfähig machst. Diese Fähigkeit kann nicht eingesetzt werden, falls Simsala schlafend, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				pt: "Raio da Confusão",
				fr: "Onde Folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Defensor agora está Confuso.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		fr: "Son super cerveau peut effectuer des opérations plus rapidement qu'un super ordinateur. Il a un Q.I. de 5000.",
		pt: "Seu super cérebro pode realizar operações mais rapidamente do que um super computador. Ele tem um QI de 5000.",
		en: "His super brain can perform operations faster than a super computer. It has a Q.I. of 5000.",
	}
}

export default card
