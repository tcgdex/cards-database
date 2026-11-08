import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [897],
	set: Set,

	name: {
		'en-us': "Spectrier",
		'fr-fr': "Spectreval",
		'es-es': "Spectrier",
		'it-it': "Spectrier",
		'pt-br': "Spectrier",
		'de-de': "Phantoross"
	},

	illustrator: "Narumi Sato",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Night Footsteps",
			'fr-fr': "Empreintes Nocturnes",
			'es-es': "Pisadas Nocturnas",
			'it-it': "Orme Notturne",
			'pt-br': "Pegadas Noturnas",
			'de-de': "Nächtliche Schritte"
		},

		effect: {
			'en-us': "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.",
			'fr-fr': "Choisissez 2 des Pokémon de votre adversaire, puis placez 2 marqueurs de dégâts sur chacun d'eux.",
			'es-es': "Elige 2 de los Pokémon de tu rival y pon 2 contadores de daño en cada uno de ellos.",
			'it-it': "Scegli due dei Pokémon del tuo avversario e metti due segnalini danno su ciascuno di essi.",
			'pt-br': "Escolha 2 dos Pokémon do seu oponente e coloque 2 contadores de dano em cada um deles.",
			'de-de': "Wähle 2 Pokémon deines Gegners und lege 2 Schadensmarken auf jedes von ihnen."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Phantom Strike",
			'fr-fr': "Frappe Fantôme",
			'es-es': "Impacto Espectral",
			'it-it': "Colpo Spettrale",
			'pt-br': "Impacto Fantasma",
			'de-de': "Phantomschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Phantom Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Fantôme.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Impacto Espectral.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Spettrale.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Impacto Fantasma.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Phantomschlag nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674094,
				tcgplayer: 283963
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674094,
				tcgplayer: 283963
			}
		},
	],
}

export default card
