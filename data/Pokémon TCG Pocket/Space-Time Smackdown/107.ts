import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		de: "Glibunkel",
		'pt-br': "Croagunk",
		ko: "삐딱구리"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [453],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
		fr: "Il fait gonfler ses glandes venimeuses tout en émettant un son\neffrayant, ce qui lui permet d'empoisonner ses proies pétrifiées.",
		es: "Infla sus bolsas venenosas para emitir un sonido macabro\na su alrededor y envenena al rival en cuanto se amedrenta.",
		it: "Gonfia le sue sacche di veleno emettendo un verso\nsinistro che fa impietrire l'avversario, poi lo avvelena.",
		de: "Bläst es seine Giftbeutel auf, ertönt ein\nunheimliches Geräusch. Wenn Gegner\ndadurch zurückschrecken, vergiftet es sie.",
		'pt-br': "Ao inflar suas bolsas de veneno, preenche a área\ncom um som peculiar e acerta os oponentes assustados\ncom um soco venenoso.",
		ko: "독주머니를 부풀리며 울어서\n주변에 으스스한 소리를 퍼트린 후\n상대가 풀죽으면 독찌르기를 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Group Beatdown",
			fr: "Raclée Collective",
			es: "Paliza Grupal",
			it: "Rissa",
			de: "Gruppenprügler",
			'pt-br': "Abater em Grupo",
			ko: "다함께 때려잡기"
		},

		damage: "20×",
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin for each Pokémon you have in play. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			es: "Lanza 1 moneda por cada Pokémon que tengas en juego. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Pokémon che hai in gioco. Questo attacco infligge 20 danni ogni volta che esce testa.",
			de: "Wirf 1 Münze für jedes Pokémon, das du im Spiel hast. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 1 moeda para cada Pokémon que você tem em jogo. Este ataque causa 20 pontos de dano para cada cara.",
			ko: "자신의 필드의 포켓몬의 수만큼 동전을 던져서 앞면이 나온 수 20× 20데미지를[/Ctrl:NoBreak] 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
