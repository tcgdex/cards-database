import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru ex",
		fr: "Togedemaru-ex",
		es: "Togedemaru ex",
		'es-mx': "Togedemaru ex",
		de: "Togedemaru-ex",
		it: "Togedemaru-ex",
		pt: "Togedemaru ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Stun Needle",
			fr: "Para-Dard",
			es: "Aguja Paralizante",
			'es-mx': "Aguja Paralizante",
			de: "Betäubungsnadel",
			it: "Ago Paralizzante",
			pt: "Agulha Estonteante"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Spiky Rolling",
			fr: "Roulade Piquante",
			es: "Giro Espinoso",
			'es-mx': "Giro Punzante",
			de: "Stachelrollen",
			it: "Rotolaspina",
			pt: "Giro Espinhoso"
		},

		effect: {
			en: "If this Pokémon used Spiky Rolling during your last turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a utilisé Roulade Piquante pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon usó Giro Espinoso durante tu último turno, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si este Pokémon usó Giro Punzante durante tu último turno, este ataque hace 80 puntos de daño más.",
			de: "Wenn dieses Pokémon während deines letzten Zuges Stachelrollen eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha usato Rotolaspina durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon usou Giro Espinhoso durante o seu último turno, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675961,
		cardmarket: 869760
	}
}

export default card