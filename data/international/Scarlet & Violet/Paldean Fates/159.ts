import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [707],
	set: Set,

	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mischievous Lock",
			'fr-fr': "Verrou Malicieux",
			'es-es': "Bloqueo Travieso",
			'it-it': "Blocco Birichino",
			'pt-br': "Fechadura Maliciosa",
			'de-de': "Dreistes Schloss"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, Basic Pokémon in play (both yours and your opponent's) have no Abilities, except for Mischievous Lock.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les Pokémon de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent, à l'exception de Verrou Malicieux.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los Pokémon Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad, excepto Bloqueo Travieso.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, i Pokémon Base in gioco, sia tuoi che del tuo avversario, non hanno abilità, a eccezione di Blocco Birichino.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon Básicos em jogo (seus e do seu oponente) não têm Habilidades, exceto por Fechadura Maliciosa.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, haben Basis-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten, außer Dreistes Schloss."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Joust",
			'fr-fr': "Joute",
			'es-es': "Justa",
			'it-it': "Giostra",
			'pt-br': "Justar",
			'de-de': "Lanzenstich"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751698,
				tcgplayer: 534681,
				cardtrader: 274344
			}
		},
	],

	illustrator: "yuu",

	description: {
		'en-us': "In the past, noble families entrusted their vault keys to a Klefki. They passed the Klefki down through the generations, taking good care of it.",
	},

}

export default card
