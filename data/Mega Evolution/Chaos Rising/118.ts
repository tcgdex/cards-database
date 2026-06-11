import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Mega Dragalge ex",
		fr: "Méga-Kravarech-ex",
		es: "Mega-Dragalge ex",
		'es-mx': "Mega-Dragalge ex",
		de: "Mega-Tandrak-ex",
		it: "Mega Dragalge-ex",
		pt: "Mega Dragalge ex"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [691],
	hp: 330,
	types: ["Dragon"],

	evolveFrom: {
		en: "Skrelp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Corrosive Liquid",
			fr: "Liquide Corrosif",
			es: "Líquido Corrosivo",
			'es-mx': "Líquido Corrosivo",
			de: "Zersetzende Flüssigkeit",
			it: "Liquido Corrosivo",
			pt: "Líquido Corrosivo"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon.",
			fr: "Défaussez tous les Outils Pokémon et toutes les Énergies spéciales de tous les Pokémon de votre adversaire.",
			es: "Descarta todas las Herramientas Pokémon y Energías Especiales de todos los Pokémon de tu rival.",
			'es-mx': "Descarta todas las Herramientas Pokémon y Energías Especiales de todos los Pokémon de tu rival.",
			de: "Lege alle Pokémon-Ausrüstungen und Spezial-Energien von allen Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta tutte le carte Oggetto Pokémon e le Energie speciali dai Pokémon del tuo avversario.",
			pt: "Descarte todas as Ferramentas Pokémon e Energias Especiais de todos os Pokémon do seu oponente."
		}
	}, {
		name: {
			en: "Pernicious Poison",
			fr: "Poison Pernicieux",
			es: "Veneno Pernicioso",
			'es-mx': "Veneno Letal",
			de: "Perniziöses Gift",
			it: "Veleno Funesto",
			pt: "Veneno Pernicioso"
		},

		cost: ["Water", "Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 16 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 16 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 16 contadores de daño en vez de uno en ese Pokémon.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el Chequeo Pokémon, pon 16 contadores de daño en lugar de 1 en ese Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 16 Schadensmarken anstelle von 1 auf jenes Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il controllo Pokémon, metti 16 segnalini danno invece di uno su quel Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 16 contadores de dano em vez de 1 naquele Pokémon."
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
