import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Focus Sash",
		'fr-fr': "Ceinture Force",
		'es-es': "Banda Focus",
		'it-it': "Focalnastro",
		'pt-br': "Cinta de Foco",
		'de-de': "Fokusgurt"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon Fighting auquel cette carte est attachée a tous ses PV et doit être mis K.O. par les dégâts d'une attaque de l'adversaire, le Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV. Ensuite, défaussez cette carte.",
		'en-us': "If the Fighting Pokémon this card is attached to has full HP and would be Knocked Out by damage from an opponent's attack, that Pokémon is not Knocked Out and its remaining HP becomes 10 instead. Then, discard this card.",
		'es-es': "Si el Pokémon Fighting al que esté unida esta carta tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque del rival, ese Pokémon no queda Fuera de Combate y sus PS restantes pasan a ser 10. Después, descarta esta carta.",
		'it-it': "Se il Pokémon Fighting a cui è assegnata questa carta ha tutti i PS e sta per essere messo KO dal danno di un attacco dell'avversario, non viene messo KO e i suoi PS rimanenti diventano 10. Poi, scarta questa carta.",
		'pt-br': "Se o Pokémon Fighting ao qual este card está ligado possuir PS cheio e estiver prestes a ser Nocauteado por danos causados por um ataque do oponente, ele não será Nocauteado e seu PS restante se tornará 10. Em seguida descarte este card.",
		'de-de': "Wenn das Fighting-Pokémon, an das diese Karte angelegt ist, volle KP hat und durch Schaden eines gegnerischen Angriffs kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig und behält stattdessen 10 KP. Lege diese Karte anschließend auf deinen Ablagestapel."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281755,
		tcgplayer: 92272
	}
}

export default card
