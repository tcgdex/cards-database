import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Veluza",
		fr: "Délestin",
		es: "Veluza",
		it: "Veluza",
		pt: "Veluza",
		de: "Agiluza"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Food Prep",
			fr: "Préparation de Repas",
			es: "Preparar la Comida",
			it: "Preparacibo",
			pt: "Preparação de Marmitas",
			de: "Zubereitung"
		},

		effect: {
			en: "Attacks used by this Pokémon cost {C} less for each Kofu card in your discard pile.",
			fr: "Les attaques utilisées par ce Pokémon coûtent {C} de moins pour chaque carte Kombu dans votre pile de défausse.",
			es: "Los ataques usados por este Pokémon cuestan {C} menos por cada carta de Fuco en tu pila de descartes.",
			it: "Il costo degli attacchi usati da questo Pokémon è ridotto di {C} per ogni carta Algaro nella tua pila degli scarti.",
			pt: "Os ataques usados por este Pokémon custam {C} a menos para cada carta Álgaro na sua pilha de descarte.",
			de: "Die Kosten der von diesem Pokémon eingesetzten Attacken verringern sich für jede Kombu-Karte in deinem Ablagestapel um {C}."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sonic Edge",
			fr: "Tranchant Sonique",
			es: "Tajo Sónico",
			it: "Muro del Suono",
			pt: "Gume Sônico",
			de: "Schallkante"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "GOTO minori"
}

export default card
