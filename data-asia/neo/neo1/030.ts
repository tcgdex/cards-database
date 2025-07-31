import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Croconaw",
         ja: "クロコノー",
         fr: "Croconaw",
         de: "Croconaw",
         es: "Croconaw",
         it: "Croconaw",
         pt: "Croconaw",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [159],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Screech",
            ja: "金切り声",
            fr: "Hurler",
            de: "Kreischen",
            es: "Chillido",
            it: "Strillo",
            pt: "Screech",
          },
          effect: {
            en: "Until the end of your next turn, if an attack damages the Defending Pokemon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokemon.",
            ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
            fr: "Jusqu'à la fin de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 20 dommages supplémentaires au Pokémon en défense.",
            de: "Wenn ein Angriff das verteidigende Pokémon schädigt (nach der Anwendung von Schwäche und Widerstand), bis zum Ende Ihrer nächsten Kurve schadet dieser Angriff 20 weitere Schäden am verteidigenden Pokémon.",
            es: "Hasta el final de su próximo turno, si un ataque daña al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 20 daños más al Pokémon defensor.",
            it: "Fino alla fine del turno successivo, se un attacco danneggia il Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 20 danni al Pokemon in difesa.",
            pt: "Até o final do seu próximo turno, se um ataque danificar o Pokémon atual (depois de aplicar fraqueza e resistência), esse ataque causa mais 20 danos ao Pokémon defensivo.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Jaw Clamp",
            ja: "ジョークランプ",
            fr: "Pince à mâchoire",
            de: "Kieferklemme",
            es: "Pisotón de la mandíbula",
            it: "Mancella morsetto",
            pt: "Grampo da mandíbula",
          },
          effect: {
            en: "Until the end of your opponent's next turn, as long as Croconaw is your Active Pokemon, the Defending Pokemon can't retreat, and if the effect of an attack, Pokemon Power, or Trainer card would change that player's Active Pokemon, that part of the effect does nothing.",
            ja: "クロコノーがアクティブなポケモンである限り、対戦相手の次のターンの終わりまで、ディフェンディングポケモンは退却できません。攻撃、ポケモンパワー、またはトレーナーカードの効果がそのプレイヤーのアクティブなポケモンを変更すると、その効果の部分は何もしません。",
            fr: "Jusqu'à la fin du prochain virage de votre adversaire, tant que Croconaw est votre Pokémon actif, le Pokémon en défense ne peut pas se retirer, et si l'effet d'une attaque, d'une puissance de pokemon ou d'une carte d'entraîneur changerait le Pokémon actif de ce joueur, cette partie de l'effet ne fait rien.",
            de: "Bis zum Ende der nächsten Kurve Ihres Gegners, solange Croconaw Ihr aktives Pokémon ist, kann sich das verteidigende Pokémon nicht zurückziehen, und wenn sich der Effekt eines Angriffs, einer Pokemon -Leistung oder der Trainerkarte das aktive Pokemon dieses Spielers ändern würde, tut dieser Teil des Effekts nichts.",
            es: "Hasta el final del próximo turno de tu oponente, siempre que Croconaw sea tu Pokémon activo, el Pokémon defensor no puede retirarse, y si el efecto de un ataque, el poder de los Pokémon o la carta del entrenador cambiaría el Pokémon activo de ese jugador, esa parte del efecto no hace nada.",
            it: "Fino alla fine del prossimo turno del tuo avversario, fintanto che Croconaw è il tuo Pokemon attivo, il Pokemon in difesa non può ritirarsi e se l'effetto di un attacco, Pokemon Power o Trainer Card cambierebbe il Pokemon attivo di quel giocatore, quella parte dell'effetto non fa nulla.",
            pt: "Até o final do próximo turno do seu oponente, desde que o Croconaw seja o seu Pokémon ativo, o Pokémon atual não poderá recuar e, se o efeito de um ataque, Pokemon Power ou Treiner Card mudaria o Pokémon ativo desse jogador, essa parte do efeito não fizer nada.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
