import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Hearthflame Mask Ogerpon ex",
		'fr-fr': "Ogerpon Masque du Fourneau-ex",
		'es-es': "Ogerpon Máscara Horno ex",
		'it-it': "Ogerpon Maschera Focolare-ex",
		'pt-br': "Ogerpon Máscara Fornalha ex",
		'de-de': "Ofenmaske-Ogerpon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Wrathful Hearth",
			'fr-fr': "Fourneau du Courroux",
			'es-es': "Horno Iracundo",
			'it-it': "Focolare Iracondo",
			'pt-br': "Fornalha Enfurecida",
			'de-de': "Zorniger Ofen"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Dynamic Blaze",
			'fr-fr': "Brasier Dynamique",
			'es-es': "Llamarada Dinámica",
			'it-it': "Fiammata Dinamica",
			'pt-br': "Incêndio Dinâmico",
			'de-de': "Dynamischer Brand"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 140 more damage, and discard all Energy from this Pokémon.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 140 dégâts supplémentaires et vous défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 140 puntos de daño más, y descartas todas las Energías de este Pokémon.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 140 danni in più e tu scarti tutte le Energie da questo Pokémon.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 140 pontos de dano a mais, e descarte todas as Energias deste Pokémon.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 140 Schadenspunkte mehr zu, und du legst alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: "140+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769214,
				tcgplayer: 550084
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 830112,
			}
		},
		{
			type: "holo",
			size: "jumbo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 830113,
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card