import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Malamar EX",
		'fr-fr': "Sepiatroce EX",
		'es-es': "Malamar EX",
		'it-it': "Malamar EX",
		'pt-br': "Malamar EX",
		'de-de': "Calamanero EX"
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
				'en-us': "Hyper Hypnosis",
				'fr-fr': "Hypnose Intense",
				'es-es': "Hiperhipnosis",
				'it-it': "Iperipnosi",
				'pt-br': "Hiper Hipnose",
				'de-de': "Hyperhypnose"
			},
			effect: {
				'en-us': "When you attach an Energy from your hand to this Pokémon, you may use this Ability. Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Lorsque vous attachez une Énergie de votre main à ce Pokémon, vous pouvez utiliser ce talent. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "Cuando unas 1 Energía de tu mano a este Pokémon, puedes usar esta habilidad. El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Quando assegni un'Energia dalla tua mano a questo Pokémon, puoi usare questa abilità. Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "Ao ligar uma Energia da sua mão a esse Pokémon, você poderá usar essa Habilidade. O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Wenn du 1 Energie von deiner Hand an dieses Pokémon anlegst, kannst du diese Fähigkeit einsetzen. Das Aktive Pokémon deines Gegners schläft jetzt."
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
				'en-us': "MAXamar",
				'fr-fr': "MAXatroce",
				'es-es': "MAXamar",
				'it-it': "MAXamar",
				'pt-br': "MAXamar",
				'de-de': "CalaMAX"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Esse ataque causa 60 de danos vezes o número de caras.",
				'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
	stage: "Basic",

	thirdParty: {
		cardmarket: 281864,
		tcgplayer: 94684
	}
}

export default card
