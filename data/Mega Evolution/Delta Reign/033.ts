import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou ex",
		fr: "Raikou‑ex",
		de: "Raikou-ex",
		es: "Raikou ex",
		it: "Raikou-ex",
		pt: "Raikou ex",
		'es-mx': "Raikou ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Thunder-Clad",
			fr: "Mantelure Foudroyante",
			de: "Donnergewand",
			es: "Revestimiento Trueno",
			it: "Ammantuono",
			pt: "Revestimento de Trovão",
			'es-mx': "Manto Atronador"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for an Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte Énergie, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta de Energía y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta Energia e assegnala a questo Pokémon. Poi rimischia il tuo mazzo.",
			pt: "Se você for o primeiro a jogar, você poderá usar este ataque durante o seu primeiro turno. Procure por uma carta de Energia no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu mazo 1 carta de Energía y únela a este Pokémon. Después, baraja tu mazo."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Power Rush",
			fr: "Ruée Puissante",
			de: "Power-Ansturm",
			es: "Envite Poderoso",
			it: "Assalto Potente",
			pt: "Arremetida Poderosa",
			'es-mx': "Embestida Poderosa"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't use attacks.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges keine Attacken einsetzen.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede usar ataques durante tu próximo turno.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 726523,
				cardmarket: 918849
			}
		}
	],
}

export default card