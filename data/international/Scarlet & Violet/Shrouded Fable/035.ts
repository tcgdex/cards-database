import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [717],
	set: Set,

	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Corrosive Winds",
			'fr-fr': "Vents Corrosifs",
			'es-es': "Vientos Corrosivos",
			'it-it': "Venti Corrosivi",
			'pt-br': "Ventos Corrosivos",
			'de-de': "Korrosionswinde"
		},

		effect: {
			'en-us': "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
			'es-es': "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
			'it-it': "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario che ha dei segnalini danno.",
			'pt-br': "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente que tem algum contador de dano nele.",
			'de-de': "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Destructive Beam",
			'fr-fr': "Rayon Désintégrateur",
			'es-es': "Rayo Exterminador",
			'it-it': "Demoliraggio",
			'pt-br': "Raio Destruidor",
			'de-de': "Zerstörungsstrahler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
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


	illustrator: "SIE NANAHARA",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780930,
				tcgplayer: 560345
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780930,
				tcgplayer: 560345
			}
		},
	],
}

export default card
