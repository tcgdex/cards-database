import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Voltorb",
		fr: "Voltorbe de Hisui",
		es: "Voltorb de Hisui",
		it: "Voltorb di Hisui",
		pt: "Voltorb de Hisui",
		de: "Hisui Voltobal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Cheerful Charge",
			fr: "Charge Joyeuse",
			es: "Carga Feliz",
			it: "Carica Gioiosa",
			pt: "Carga Animada",
			de: "Fröhlicher Ladevorgang"
		},

		effect: {
			en: "You can use this attack only if you go second, and only during your first turn. Choose up to 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a basic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Choisissez jusqu'à 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Énergie de base et attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			es: "Puedes usar este ataque solo si sales segundo, y solo durante tu primer turno. Elige hasta 2 de tus Pokémon en Banca. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Scegli fino a due dei tuoi Pokémon in panchina. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Você só pode usar este ataque se for o segundo a jogar e somente no seu primeiro turno. Escolha até 2 dos seus Pokémon no Banco. Para cada um daqueles Pokémon, procure por 1 carta de Energia básica no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Wähle bis zu 2 Pokémon auf deiner Bank. Durchsuche für jedes jener Pokémon dein Deck nach 1 Basis-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card