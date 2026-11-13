import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		de: "Elevoltek",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		'es-mx': "Electivire"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage",
			de: "Bodyslam",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			'es-mx': "Golpe de Cuerpo"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Voltaic Hammer",
			fr: "Marteau Voltaïque",
			de: "Voltaischer Hammer",
			es: "Martillo Voltaico",
			it: "Martello Voltaico",
			pt: "Martelo Voltaico",
			'es-mx': "Martillo Voltaico"
		},

		effect: {
			en: "Discard any amount of Basic Energy from this Pokémon, and this attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies de base que vous le voulez de ce Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege beliebig viele Basis-Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			es: "Descarta cualquier cantidad de Energías Básicas de este Pokémon, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta un numero qualsiasi di Energie base da questo Pokémon e questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer quantidade de Energia Básica deste Pokémon, e este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'es-mx': "Descarta cualquier cantidad de Energías Básicas de este Pokémon, y este ataque hace 60 puntos de daño por cada carta que descartaste de esta manera."
		},

		damage: "60×",
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726521,
		cardmarket: 918847
	}
}

export default card