import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		'en-us': "Conkeldurr V",
		'fr-fr': "Bétochef V",
		'es-es': "Conkeldurr V",
		'it-it': "Conkeldurr V",
		'pt-br': "Conkeldurr V",
		'de-de': "Meistagrif V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Counter",
			'fr-fr': "Riposte",
			'es-es': "Contraataque",
			'it-it': "Contrattacco",
			'pt-br': "Contra-atacar",
			'de-de': "Konter"
		},

		effect: {
			'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			'pt-br': "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamic Punch",
			'fr-fr': "Dynamo-Poing",
			'es-es': "Puño Dinámico",
			'it-it': "Dinamipugno",
			'pt-br': "Soco Dinâmico",
			'de-de': "Wuchtschlag"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665670,
				tcgplayer: 276999
			}
		},
	],
}

export default card
