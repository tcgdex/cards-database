import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Scream Tail ex",
		fr: "Hurle-Queue-ex",
		es: "Colagrito ex",
		it: "Codaurlante-ex",
		pt: "Cauda Brado ex",
		de: "Brüllschweif-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scream",
			fr: "Hurler",
			es: "Gritar",
			it: "Grido",
			pt: "Berro",
			de: "Gebrüll"
		},

		effect: {
			en: "You can use this attack only if you go second, and only during your first turn. Your opponent can't play any Supporter cards from their hand during their next turn.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
			es: "Puedes usar este ataque solo si sales en segundo lugar, y solo durante tu primer turno. Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
			it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
			pt: "Você só pode usar este ataque se for o segundo a jogar e somente durante o seu primeiro turno. Seu oponente não poderá jogar nenhuma carta de Apoiador da mão dele durante o próximo turno dele.",
			de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			it: "Sgranocchio",
			pt: "Mastigada",
			de: "Knirscher"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "akagi",

	thirdParty: {
		cardmarket: 769268
	}
}

export default card