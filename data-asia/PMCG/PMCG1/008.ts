import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Ivysaur",
		ja: "アイビサウルス",
		fr: "Ivysaure",
		de: "IVYSaur",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				en: "Vine Whip",
				ja: "つる鞭",
				fr: "Fouet de vigne",
				de: "Rebepeitsche",
				es: "Vine látigo",
				it: "Whip di vite",
				pt: "Vine Whip",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				en: "Poison Powder",
				ja: "毒パウダー",
				fr: "Poudre d'empoisonnement",
				de: "Giftpulver",
				es: "Polvo de veneno",
				it: "Polvere di veleno",
				pt: "Veneno em pó",
			},
			effect: {
				en: "Your opponent's Active Pokemon is now Poisoned.",
				ja: "相手のアクティブなポケモンは毒されています。",
				fr: "Le pokemon actif de votre adversaire est maintenant empoisonné.",
				de: "Das aktive Pokémon Ihres Gegners ist jetzt vergiftet.",
				es: "El Pokémon activo de tu oponente ahora está envenenado.",
				it: "Il Pokemon attivo del tuo avversario è ora avvelenato.",
				pt: "O Pokémon ativo do seu oponente agora está envenenado.",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
