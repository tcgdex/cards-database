import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Alakazam EX",
		fr: "Alakazam EX",
		es: "Alakazam EX",
		it: "Alakazam EX",
		pt: "Alakazam EX",
		de: "Simsala EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Kinesis",
				fr: "Télékinésie",
				es: "Kinético",
				it: "Cinèsi",
				pt: "Cinese",
				de: "Psykraft"
			},
			effect: {
				en: "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent's Active Pokémon and 3 damage counters on 1 of your opponent's Benched Pokémon.",
				fr: "Lorsque vous jouez M-Alakazam-EX de votre main pour faire évoluer ce Pokémon, avant qu'il n'évolue, vous pouvez placer 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire et 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
				es: "Cuando juegues a M-Alakazam-EX de tu mano para hacer evolucionar a este Pokémon, antes de que evolucione, puedes poner 2 contadores de daño en el Pokémon Activo de tu rival y 3 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
				it: "Quando giochi Mega Alakazam-EX dalla tua mano per far evolvere questo Pokémon, prima che si evolva, puoi mettere due segnalini danno sul Pokémon attivo del tuo avversario e tre segnalini danno su uno dei Pokémon in panchina del tuo avversario.",
				pt: "Ao jogar M-Alakazam-EX da sua mão para evoluir este Pokémon, antes de evolui-lo, você pode colocar 2 contadores de danos no Pokémon Ativo do seu oponente e 3 contadores de danos em 1 dos Pokémon no Banco do seu oponente.",
				de: "Wenn du M-Simsala-EX von deiner Hand spielst, um dieses Pokémon zu entwickeln, kannst du, bevor es sich entwickelt, auf das Aktive Pokémon deines Gegners 2 Schadensmarken und 3 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Suppression",
				fr: "Suppression",
				es: "Represión",
				it: "Soppressione",
				pt: "Supressão",
				de: "Unterdrückung"
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel de l'Énergie est attachée.",
				es: "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga alguna Energía unida a él.",
				it: "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia delle Energie assegnate.",
				pt: "Coloque 3 contadores de danos em cada um dos Pokémon do seu oponente que possua alguma Energia ligada a ele.",
				de: "Lege auf jedes Pokémon deines Gegners, an das Energie angelegt ist, 3 Schadensmarken."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
