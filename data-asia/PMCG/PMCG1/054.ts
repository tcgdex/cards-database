import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Onix",
		ja: "onix",
		fr: "Onix",
		de: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				en: "Rock Throw",
				ja: "ロックスロー",
				fr: "Lancer du roche",
				de: "Felswurf",
				es: "Lanzamiento de roca",
				it: "Lancio di roccia",
				pt: "Arremesso de rochas",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				en: "Harden",
				ja: "硬化します",
				fr: "Durcir",
				de: "Härten",
				es: "Endurecer",
				it: "Indurire",
				pt: "Endurecer",
			},
			effect: {
				en: "During your opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				ja: "対戦相手の次のターン中に、Onixに30以下の損傷が発生した場合（脱力感と抵抗を適用した後）、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
				fr: "Pendant le prochain virage de votre adversaire, chaque fois que 30 dégâts ou moins sont causés à ONIX (après avoir appliqué une faiblesse et une résistance), empêchez ces dommages. (Tout autre effet des attaques se produit.)",
				de: "Verhindern Sie während der nächsten Runde Ihres Gegners, wenn 30 oder weniger Schäden an ONIX angerichtet werden (nach Auftragen von Schwäche und Widerstand), diesen Schaden zu verhindern. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
				es: "Durante el próximo turno de tu oponente, cada vez que se causan 30 o menos daño a Onix (después de aplicar debilidad y resistencia), evite ese daño. (Todavía ocurren cualquier otro efecto de los ataques).",
				it: "Durante il prossimo turno dell'avversario, ogni volta che vengono fatti 30 o meno danni a Onix (dopo aver applicato la debolezza e la resistenza), prevenire tali danni. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
				pt: "Durante o próximo turno do seu oponente, sempre que 30 ou menos danos são causados ao Onix (depois de aplicar fraqueza e resistência), evite esse dano. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
			},

		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};
