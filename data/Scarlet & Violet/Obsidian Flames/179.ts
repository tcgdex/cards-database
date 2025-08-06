import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou-ex",
		en: "Greedent ex",
		es: "Greedent ex",
		it: "Greedent-ex",
		pt: "Greedent ex",
		de: "Schlaraffel-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Jamais Assez",
			en: "Never Ever Enough",
			es: "Nunca es Suficiente",
			it: "Mai Abbastanza",
			pt: "Nunca Nunquinha Suficiente",
			de: "Nimmersatt"
		},

		effect: {
			fr: "Regardez les 3 cartes du dessus de votre deck. Vous pouvez ajouter ces cartes à votre main. Sinon, défaussez ces cartes et piochez 3 cartes.",
			en: "Look at the top 3 cards of your deck. You may put those cards into your hand. If you don't, discard those cards and draw 3 cards.",
			es: "Mira las 3 primeras cartas de tu baraja. Puedes poner esas cartas en tu mano. Si no lo haces, descarta esas cartas y roba 3 cartas.",
			it: "Guarda le prime tre carte del tuo mazzo. Puoi aggiungere quelle carte a quelle che hai in mano. Se non lo fai, scarta quelle carte e pescane tre.",
			pt: "Olhe as 3 cartas de cima do seu baralho. Você pode colocar aquelas cartas na sua mão. Se não fizer isto, descarte aquelas cartas e compre 3 cartas.",
			de: "Schau dir die obersten 3 Karten deines Decks an. Du kannst jene Karten auf deine Hand nehmen. Wenn du das nicht machst, lege jene Karten auf deinen Ablagestapel und ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Glissé-Roulé",
			en: "Slip 'n' Roll",
			es: "Resbalar y Rodar",
			it: "Rotoloscivolo",
			pt: "Deslizar e Rolar",
			de: "Rutschrolle"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Glissé-Roulé.",
			en: "During your next turn, this Pokémon can't use Slip 'n' Roll.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Resbalar y Rodar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Rotoloscivolo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Deslizar e Rolar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Rutschrolle nicht einsetzen."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 725259
	}
}

export default card