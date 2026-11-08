import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Spell Tag",
		'fr-fr': "Rune Sort",
		'es-es': "Hechizo",
		'it-it': "Spettrotarga",
		'pt-br': "Talismã de Feitiço",
		'de-de': "Bannsticker"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lorsque le Pokémon Psychic auquel cette carte est attachée est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		'en-us': "When the Psychic Pokémon this card is attached to is Knocked Out by damage from an opponent’s attack, put 4 damage counters on your opponent’s Pokémon in any way you like.",
		'es-es': "Cuando el Pokémon Psychic al que esté unida esta carta quede Fuera de Combate por el daño de un ataque de tu rival, pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
		'it-it': "Quando il Pokémon Psychic a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco del tuo avversario, distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
		'pt-br': "Quando o Pokémon Psychic ao qual esta carta está ligada for Nocauteado pelo dano de um ataque do seu oponente, coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
		'de-de': "Wenn das Psychic-Pokémon, an das diese Karte angelegt ist, durch den Schaden einer Attacke deines Gegners kampfunfähig wird, lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 365869,
		tcgplayer: 179027
	}
}

export default card
