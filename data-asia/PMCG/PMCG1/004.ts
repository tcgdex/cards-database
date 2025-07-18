import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Weedle",
		ja: "雑草",
		fr: "Faire de l'herbe",
		de: "Unkraut",
		es: "Maleza",
		it: "Diserbare",
		pt: "Weedle",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [13],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				en: "Poison Sting",
				ja: "毒物",
				fr: "Piqûre de poison",
				de: "Giftstich",
				es: "Picadura de veneno",
				it: "Sting veleno",
				pt: "Picada de veneno",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokemon is now Poisoned.",
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが毒されます。",
				fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant empoisonné.",
				de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das aktive Pokémon Ihres Gegners jetzt vergiftet.",
				es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está envenenado.",
				it: "Capovolgi una moneta. Se la testa, il Pokemon attivo del tuo avversario è ora avvelenato.",
				pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente agora está envenenado.",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
