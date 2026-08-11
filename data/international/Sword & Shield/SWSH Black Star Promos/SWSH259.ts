import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [487],
	set: Set,

	name: {
		'fr-fr': "Giratina V",
		'de-de': "Giratina V",
		'es-es': "Giratina V",
		'pt-br': "Giratina V",
		'it-it': "Giratina V",
		'en-us': "Giratina V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Fouilles Abyssales",
			'de-de': "Suche am Abgrund",
			'es-es': "Búsqueda Abismal",
			'pt-br': "Busca Abissal",
			'it-it': "Cercabisso",
			'en-us': "Abyss Seeking"
		},

		effect: {
			'fr-fr': "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Placez les autres cartes dans la Zone Perdue.",
			'de-de': "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten ins Nirgendwo.",
			'es-es': "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Pon el resto de las cartas en la Zona Perdida.",
			'pt-br': "Olhe as 4 cartas de cima do seu baralho e coloque 2 delas na sua mão. Coloque as demais cartas na Zona Perdida.",
			'it-it': "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Metti le altre carte nell'area perduta.",
			'en-us': "Look at the top 4 cards of your deck and put 2 of them into your hand. Put the other cards in the Lost Zone."
		}
	}, {
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Déchiquetage",
			'de-de': "Zerfetzer",
			'es-es': "Hacer Trizas",
			'pt-br': "Triturar",
			'it-it': "Tritatutto",
			'en-us': "Shred"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674375
	}
}

export default card
