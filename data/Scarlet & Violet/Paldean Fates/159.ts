import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mischievous Lock",
			fr: "Verrou Malicieux",
			es: "Bloqueo Travieso",
			it: "Blocco Birichino",
			pt: "Fechadura Maliciosa",
			de: "Dreistes Schloss"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, Basic Pokémon in play (both yours and your opponent's) have no Abilities, except for Mischievous Lock.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent, à l'exception de Verrou Malicieux.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad, excepto Bloqueo Travieso.",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon Base in gioco, sia tuoi che del tuo avversario, non hanno abilità, a eccezione di Blocco Birichino.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon Básicos em jogo (seus e do seu oponente) não têm Habilidades, exceto por Fechadura Maliciosa.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, haben Basis-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten, außer Dreistes Schloss."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Joust",
			fr: "Joute",
			es: "Justa",
			it: "Giostra",
			pt: "Justar",
			de: "Lanzenstich"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card