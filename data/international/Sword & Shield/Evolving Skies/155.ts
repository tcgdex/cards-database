import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ribbon Badge",
		'fr-fr': "Badge Ruban",
		'es-es': "Medalla Cinta",
		'it-it': "Medaglia Fiocco",
		'pt-br': "Insígnia de Fita",
		'de-de': "Schleifenorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon V this card is attached to has \"Sylveon\" in its name and is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card.",
		'fr-fr': "Si le Pokémon-V auquel cette carte est attachée a \" Nymphali \" dans son nom et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, ce dernier récupère une carte Récompense de moins.",
		'es-es': "Si el Pokémon V al que está unida esta carta tiene \"Sylveon\" en su nombre y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador coge 1 carta de Premio menos.",
		'it-it': "Se il Pokémon-V a cui è assegnata questa carta ha \"Sylveon\" nel nome e viene messo KO dai danni di un attacco di un Pokémon del tuo avversario, quel giocatore prende una carta Premio in meno.",
		'pt-br': "Se o Pokémon V ao qual esta carta está ligada tiver \"Sylveon\" em seu nome e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos.",
		'de-de': "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, \"Feelinara\" zum Namen gehört und es durch eine Attacke von Pokémon deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574213,
				tcgplayer: 246781
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574213,
				tcgplayer: 246781
			}
		},
	],
}

export default card
