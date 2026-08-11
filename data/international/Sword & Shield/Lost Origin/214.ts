import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Box of Disaster",
		'fr-fr': "Boîte à Désastre",
		'es-es': "Caja del Desastre",
		'it-it': "Scatola del Disastro",
		'pt-br': "Caixa do Desastre",
		'de-de': "Kiste des Unheils"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon V this card is attached to has full HP and is Knocked Out by damage from an attack from your opponent's Pokémon, put 8 damage counters on the Attacking Pokémon.",
		'fr-fr': "Si le Pokémon-V auquel cette carte est attachée a tous ses PV et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
		'es-es': "Si el Pokémon V al que está unida esta carta tiene todos sus PS y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 8 contadores de daño en el Pokémon Atacante.",
		'it-it': "Se il Pokémon-V a cui è assegnata questa carta ha tutti i PS e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti otto segnalini danno sul Pokémon attaccante.",
		'pt-br': "Se o Pokémon V ao qual esta carta está ligada tiver PS cheio e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 8 contadores de dano no Pokémon Atacante.",
		'de-de': "Wenn das Pokémon-V, an das diese Karte angelegt ist, volle KP hat und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 8 Schadensmarken auf das Angreifende Pokémon."
	},

	trainerType: "Tool",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 674220,
				tcgplayer: 284169
			}
		},
	],
}

export default card
