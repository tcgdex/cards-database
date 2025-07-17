import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Imakuni?'s Doduo",
         ja: "Imakuni？ 's doduo",
         fr: "IMakuni? Soduo?",
         de: "Imakuni? S Doduo",
         es: "IMAKUNI? D DODUO",
         it: "Doduo? 'S iMakuni",
         pt: "Imakuni? Doduo",
      },

      rarity: "Hyper Rare",
      category: "Pokemon",
      dexId: [84],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Frenzied Escape",
            ja: "熱狂的な脱出",
            fr: "Évasion frénétique",
            de: "Frenzierter Flucht",
            es: "Escape frenético",
            it: "Fuga frenetica",
            pt: "Escape frenético",
          },
          effect: {
            en: "When Doduo retreats, hold this card and throw it, because Doduo is running away. Throw the card horizontally with a snap to get the furthest distance!",
            ja: "Doduoが退却したら、このカードを持って投げます。Doduoが逃げているからです。スナップでカードを水平に投げて、最も遠い距離を獲得します！",
            fr: "Lorsque Doduo se retire, tenez cette carte et jetez-la, car Doduo s'enfuit. Jetez la carte horizontalement avec un snap pour obtenir la distance la plus éloignée!",
            de: "Wenn sich Doduo zurückzieht, halten Sie diese Karte und werfen Sie sie, weil Doduo wegläuft. Werfen Sie die Karte horizontal mit einem Schnappschuss, um die weiteste Entfernung zu erhalten!",
            es: "Cuando Doduo se retire, sostenga esta carta y tírela, porque Doduo está huyendo. ¡Lanza la carta horizontalmente con un chasquido para obtener la distancia más alejada!",
            it: "Quando Doduo si ritira, tieni questa carta e lanciala, perché Doduo sta scappando. Lancia la carta in orizzontale con uno scatto per ottenere la distanza più lontana!",
            pt: "Quando Doduo se retirar, segure este cartão e jogue -o, porque Doduo está fugindo. Jogue o cartão horizontalmente com um estalo para obter a maior distância!",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Harmonize",
            ja: "調和します",
            fr: "Harmoniser",
            de: "Harmonisieren",
            es: "Armonizar",
            it: "Armonizzare",
            pt: "Harmonizar",
          },
          effect: {
            en: "From the moment you use this attack, you must begin to sing a song. (While the song is being sung, the game continues.) When the song is finished, this attack does 30 damage.",
            ja: "この攻撃を使用した瞬間から、歌を歌い始めなければなりません。 （歌が歌われている間、ゲームは続きます。）曲が終了すると、この攻撃は30ダメージを与えます。",
            fr: "À partir du moment où vous utilisez cette attaque, vous devez commencer à chanter une chanson. (Pendant que la chanson est chantée, le jeu continue.) Lorsque la chanson est terminée, cette attaque fait 30 dégâts.",
            de: "Von dem Moment an, in dem Sie diesen Angriff verwenden, müssen Sie anfangen, ein Lied zu singen. (Während der Song gesungen wird, geht das Spiel weiter.) Wenn der Song fertig ist, verursacht dieser Angriff 30 Schaden.",
            es: "Desde el momento en que usas este ataque, debes comenzar a cantar una canción. (Mientras se canta la canción, el juego continúa). Cuando la canción está terminada, este ataque hace 30 daños.",
            it: "Dal momento in cui usi questo attacco, devi iniziare a cantare una canzone. (Mentre la canzone viene cantata, il gioco continua.) Quando la canzone è finita, questo attacco fa 30 danni.",
            pt: "Desde o momento em que você usa esse ataque, você deve começar a cantar uma música. (Enquanto a música está sendo cantada, o jogo continua.) Quando a música termina, esse ataque causa 30 danos.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
