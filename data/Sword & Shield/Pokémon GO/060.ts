import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		pt: "Bibarel",
		de: "Bidifas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Reassuring Dam",
			fr: "Barrage Réconfortant",
			es: "Presa Tranquilizadora",
			it: "Diga Rassicurante",
			pt: "Represa Reconfortante",
			de: "Beruhigender Damm"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, cards in your deck can't be discarded by effects of your opponent's attacks, Abilities, Item cards, or Supporter cards.",
			fr: "Tant que ce Pokémon est sur votre Banc, les cartes dans votre deck ne peuvent pas être défaussées par les effets des attaques, talents, cartes Objet ou cartes Supporter de votre adversaire.",
			es: "Mientras este Pokémon esté en tu Banca, las cartas de tu baraja no se pueden descartar por los efectos de los ataques, habilidades, cartas de Objeto o cartas de Partidario de tu rival.",
			it: "Fintanto che questo Pokémon è nella tua panchina, le carte del tuo mazzo non possono essere scartate per effetto degli attacchi, delle abilità, delle carte Strumento o delle carte Aiuto del tuo avversario.",
			pt: "Enquanto este Pokémon estiver no seu Banco, cartas no seu baralho não poderão ser descartadas por efeitos de ataques, Habilidades, cartas de Item ou cartas de Apoiador do seu oponente.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, können Karten in deinem Deck nicht durch Effekte von Attacken, Fähigkeiten, Itemkarten oder Unterstützerkarten deines Gegners auf den Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card