import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Malamar EX",
		fr: "Sepiatroce EX",
		es: "Malamar EX",
		it: "Malamar EX",
		pt: "Malamar EX",
		de: "Calamanero EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hyper Hypnosis",
				fr: "Hypnose Intense",
				es: "Hiperhipnosis",
				it: "Iperipnosi",
				pt: "Hiper Hipnose",
				de: "Hyperhypnose"
			},
			effect: {
				en: "When you attach an Energy from your hand to this Pokémon, you may use this Ability. Your opponent's Active Pokémon is now Asleep.",
				fr: "Lorsque vous attachez une Énergie de votre main à ce Pokémon, vous pouvez utiliser ce talent. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Cuando unas 1 Energía de tu mano a este Pokémon, puedes usar esta habilidad. El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Quando assegni un'Energia dalla tua mano a questo Pokémon, puoi usare questa abilità. Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Ao ligar uma Energia da sua mão a esse Pokémon, você poderá usar essa Habilidade. O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Wenn du 1 Energie von deiner Hand an dieses Pokémon anlegst, kannst du diese Fähigkeit einsetzen. Das Aktive Pokémon deines Gegners schläft jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "MAXamar",
				fr: "MAXatroce",
				es: "MAXamar",
				it: "MAXamar",
				pt: "MAXamar",
				de: "CalaMAX"
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda para cada Energia ligada a este Pokémon. Esse ataque causa 60 de danos vezes o número de caras.",
				de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
