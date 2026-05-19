import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Zone",
		de: "Geheimnis Zone"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before he or she attacks), if that player has an Evolution card in his or her hand, he or she may search his or her deck for a basic Energy card, show it to his or her opponent, and put it into his or her hand. Then that player chooses an Evolution card from his or her hand, shows it to his or her opponent, and puts it into his or her deck. That player shuffles his or her deck afterward.",
		de: "Einmal während des Zuges jedes Spielers (vor dem Angriff) kann dieser Spieler, falls er eine Entwicklungskarte auf seiner Hand hat, sein Deck nach einer Basis-Energykarte durchsuchen, sie seinem Gegner zeigen und sie auf die Hand nehmen. Dann wählt dieser Spieler eine Entwicklungskarte von seiner Hand, zeigt sie seinem Gegner und legt sie in sein Deck. Der Spieler mischt sein Deck."
	},

	thirdParty: {
		cardmarket: 275395,
		tcgplayer: 87674
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
