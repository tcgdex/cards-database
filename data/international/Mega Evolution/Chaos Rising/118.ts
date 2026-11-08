import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Mega Dragalge ex",
		'fr-fr': "Méga-Kravarech-ex",
		'es-es': "Mega-Dragalge ex",
		'es-mx': "Mega-Dragalge ex",
		'de-de': "Mega-Tandrak-ex",
		'it-it': "Mega Dragalge-ex",
		'pt-br': "Mega Dragalge ex"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [691],
	hp: 330,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Skrelp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Corrosive Liquid",
			'fr-fr': "Liquide Corrosif",
			'es-es': "Líquido Corrosivo",
			'es-mx': "Líquido Corrosivo",
			'de-de': "Zersetzende Flüssigkeit",
			'it-it': "Liquido Corrosivo",
			'pt-br': "Líquido Corrosivo"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon.",
			'fr-fr': "Défaussez tous les Outils Pokémon et toutes les Énergies spéciales de tous les Pokémon de votre adversaire.",
			'es-es': "Descarta todas las Herramientas Pokémon y Energías Especiales de todos los Pokémon de tu rival.",
			'es-mx': "Descarta todas las Herramientas Pokémon y Energías Especiales de todos los Pokémon de tu rival.",
			'de-de': "Lege alle Pokémon-Ausrüstungen und Spezial-Energien von allen Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta tutte le carte Oggetto Pokémon e le Energie speciali dai Pokémon del tuo avversario.",
			'pt-br': "Descarte todas as Ferramentas Pokémon e Energias Especiais de todos os Pokémon do seu oponente."
		}
	}, {
		name: {
			'en-us': "Pernicious Poison",
			'fr-fr': "Poison Pernicieux",
			'es-es': "Veneno Pernicioso",
			'es-mx': "Veneno Letal",
			'de-de': "Perniziöses Gift",
			'it-it': "Veleno Funesto",
			'pt-br': "Veneno Pernicioso"
		},

		cost: ["Water", "Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 16 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 16 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 16 contadores de daño en vez de uno en ese Pokémon.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el Chequeo Pokémon, pon 16 contadores de daño en lugar de 1 en ese Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 16 Schadensmarken anstelle von 1 auf jenes Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il controllo Pokémon, metti 16 segnalini danno invece di uno su quel Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 16 contadores de dano em vez de 1 naquele Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886511,
				tcgplayer: 693510
			}
		},
	],
}

export default card
