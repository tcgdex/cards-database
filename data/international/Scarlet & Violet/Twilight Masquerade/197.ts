import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [985],
	set: Set,

	name: {
		'en-us': "Scream Tail ex",
		'fr-fr': "Hurle-Queue-ex",
		'es-es': "Colagrito ex",
		'it-it': "Codaurlante-ex",
		'pt-br': "Cauda Brado ex",
		'de-de': "Brüllschweif-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scream",
			'fr-fr': "Hurler",
			'es-es': "Gritar",
			'it-it': "Grido",
			'pt-br': "Berro",
			'de-de': "Gebrüll"
		},

		effect: {
			'en-us': "You can use this attack only if you go second, and only during your first turn. Your opponent can't play any Supporter cards from their hand during their next turn.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
			'es-es': "Puedes usar este ataque solo si sales en segundo lugar, y solo durante tu primer turno. Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
			'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
			'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente durante o seu primeiro turno. Seu oponente não poderá jogar nenhuma carta de Apoiador da mão dele durante o próximo turno dele.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'de-de': "Knirscher"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769371,
				tcgplayer: 550241
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Hiiragi",

}

export default card