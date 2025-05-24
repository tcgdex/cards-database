import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
		pt: "Blastoise",
		fr: "Tortank",
		de: "Turtok"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
		pt: "Wartortle",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Rain Dance",
				fr: "Danse de la pluie",
				de: "Regentanz",
				pt: "Dança da Chuva"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez attacher 1 carte Énergie  à 1 de vos Pokémon  (En plus de la carte Énergie que vous pouvez attacher normalement.) Ce pouvoir ne peut être utilisé si Tortank est Endormi, Confus ou Paralysé.",
				de: "Bist Du am Zug kannst du (vor Deinem Angriff) beliebig oft eine  Energiekarte auf eines Deiner Pokémon ablegen. (Damit ist die Ablegemöglichkeit von einer  Energiekarte pro Zug nicht aufgebraucht.) Diese Fähigkeit kann nicht eingesetzt werden, falls Turtok schlafend, verwirrt oder gelähmt ist.",
				pt: "Como você quiser durante o seu turno (antes de atacar), você pode anexar 1 carta de energia à 1 de seus Pokémon (Além da carta de energia que você pode anexar normalmente.) Este poder não pode ser usado se Blastoise está Adormecido, Confuso ou Paralisado."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydropumpe",
				pt: "Hidrojato"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each attached Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Tortank en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				de: "Fügt 40 Schadenspunkte plus 10 weitere schadenspunkte für jede auf Turtok abgelegte  Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen.",
				pt: "Faz 40 de dano mais 10 de dano adicionais para cada energia  anexada a Blastoise que não foi usada para pagar o custo de energia deste ataque. Energia  extra após a segunda não conta."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon brutal armé de canons hydrauliques. Ses puissants jets d'eau sont dévastateurs.",
		pt: "Um Pokémon brutal armado com canhões hidráulicos. Seus poderes de água são devastadores.",
		en: "A brutal Pokémon armed with hydraulic cannons. Its powerful water blasts are devastating."
	}
}

export default card
