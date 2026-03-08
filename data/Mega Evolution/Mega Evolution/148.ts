import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		de: "Kryppuk",
		it: "Spiritomb",
		es: "Spiritomb",
		pt: "Spiritomb",
		'es-mx': "Spiritomb"
	},

	illustrator: "IKEDA Saki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [442],

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Swirl",
			fr: "Tourbillon Malveillant",
			de: "Gehässiger Wirbel",
			it: "Vortice Dispettoso",
			es: "Vorágine Vengativa",
			pt: "Rodopio Rancoroso",
			'es-mx': "Vórtice de Rencor"
		},

		effect: {
			en: "If your Active {D} Pokémon is damaged by an attack from your opponent's Pokémon (even if your Active {D} Pokémon is Knocked Out), place 1 damage counter on the Attacking Pokémon.",
			fr: "Si votre Pokémon {D} Actif subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si votre Pokémon {D} Actif est mis K.O.), placez un marqueur de dégâts sur le Pokémon Attaquant.",
			de: "Wenn dein Aktives {D}-Pokémon durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dein Aktives {D}-Pokémon dadurch kampfunfähig wird), lege 1 Schadensmarke auf das Angreifende Pokémon.",
			it: "Se il tuo Pokémon {D} attivo viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se il tuo Pokémon {D} attivo viene messo KO, metti un segnalino danno sul Pokémon attaccante.",
			es: "Si tu Pokémon {D} Activo resulta dañado por un ataque de los Pokémon de tu rival (incluso si tu Pokémon {D} Activo queda Fuera de Combate), pon 1 contador de daño en el Pokémon Atacante.",
			pt: "Se o seu Pokémon {D} Ativo for danificado por um ataque dos Pokémon do seu oponente (mesmo que o seu Pokémon {D} Ativo seja Nocauteado), coloque 1 contador de dano no Pokémon Atacante.",
			'es-mx': "Si tu Pokémon {D} Activo recibe daño de un ataque de los Pokémon de tu rival (incluso si tu Pokémon {D} Activo queda Fuera de Combate), pon 1 contador de daño en el Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mountain Breaker",
			fr: "Brise-Montagnes",
			de: "Bergbrecher",
			it: "Spezzamonte",
			es: "Rompemontaña",
			pt: "Quebra-monte",
			'es-mx': "Rompemontañas"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 851219,
		tcgplayer: 654487
	}
}

export default card