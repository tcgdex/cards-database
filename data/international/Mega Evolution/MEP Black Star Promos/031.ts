import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Zekrom",
		'fr-fr': "Zekrom de N",
		'es-es': "Zekrom de N",
		'de-de': "Ns Zekrom",
		'it-it': "Zekrom di N",
		'pt-br': "Zekrom do N"
	},

	illustrator: "Bun Toujo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	dexId: [644],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'es-es': "Hacer Trizas",
			'de-de': "Zerfetzer",
			'it-it': "Tritatutto",
			'pt-br': "Triturar"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 70
	}, {
		cost: ["Fire", "Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Rampaging Thunder",
			'fr-fr': "Tonnerre Saccageur",
			'es-es': "Furia Trueno",
			'de-de': "Wütender Donner",
			'it-it': "Tuono Impazzito",
			'pt-br': "Trovão Voraz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873702,
				tcgplayer: 680480
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 873704,
				tcgplayer: 680481
			}
		},
	],
}

export default card
