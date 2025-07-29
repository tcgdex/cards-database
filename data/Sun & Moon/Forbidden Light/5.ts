import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		es: "Scatterbug",
		it: "Scatterbug",
		pt: "Scatterbug",
		de: "Purmel"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		664,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Abnormal Outbreak",
				fr: "Effusion Paradoxale",
				es: "Afluencia Inusual",
				it: "Comparse Atipiche",
				pt: "Propagação Anormal",
				de: "Ungewöhnlicher Ausbruch"
			},
			effect: {
				en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may search your deck for a Spewpa and a Vivillon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez chercher un Pérégrain et un Prismillon dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Puedes usar esta habilidad solo si sales segundo. Una vez durante tu primer turno (antes de tu ataque), puedes buscar en tu baraja 1 Spewpa y 1 Vivillon, enseñarlos y ponerlos en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Puoi usare quest’abilità solo se inizi per secondo. Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo uno Spewpa e un Vivillon, mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Você só pode usar esta Habilidade se for o segundo a jogar. Uma vez durante a sua primeira vez de jogar (antes de atacar), poderá procurar por 1 Spewpa e por 1 Vivillon no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Du kannst diese Fähigkeit nur einsetzen, wenn du als Zweiter am Zug bist. Einmal während deines ersten Zuges (bevor du angreifst) kannst du dein Deck nach 1 Puponcho und 1 Vivillon durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355526
	}
}

export default card
