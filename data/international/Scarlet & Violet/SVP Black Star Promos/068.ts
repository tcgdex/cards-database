import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1006],
	set: Set,

	name: {
		'en-us': "Iron Valiant ex",
		'fr-fr': "Garde-de-Fer-ex",
		'es-es': "Ferropaladín ex",
		'it-it': "Eroeferreo-ex",
		'pt-br': "Valentia Férrea ex",
		'de-de': "Eisenkrieger-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tachyon Bits",
			'fr-fr': "Particules de Tachyon",
			'es-es': "Partículas Taquiónicas",
			'it-it': "Particelle Tachioniche",
			'pt-br': "Fragmentos Taquiônicos",
			'de-de': "Tachyonen-Teilchen"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Laser Blade",
			'fr-fr': "Lame Laser",
			'es-es': "Cuchilla Láser",
			'it-it': "Lamalaser",
			'pt-br': "Espada Laser",
			'de-de': "Laserklinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "aky CG Works",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 740409,
				tcgplayer: 527879
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 740410,
				tcgplayer: 531864
			}
		}
	],
}

export default card
