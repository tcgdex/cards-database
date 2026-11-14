import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		de: "Nidoqueen",
		es: "Nidoqueen",
		it: "Nidoqueen",
		pt: "Nidoqueen",
		'es-mx': "Nidoqueen"
	},

	illustrator: "Aliya Chen",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Maternal Call",
			fr: "Appel Maternel",
			de: "Ruf der Mutter",
			es: "Llamada Maternal",
			it: "Richiamo Materno",
			pt: "Chamado Materno",
			'es-mx': "Invitación Maternal"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		}
	}],

	attacks: [{
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			de: "Gigastoß",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			'es-mx': "Gigaimpacto"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 150,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728032,
				cardmarket: 918880
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728032,
				cardmarket: 918880
			}
		}
	],
}

export default card