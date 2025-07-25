import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Gloom",
         ja: "暗闇",
         fr: "Obscurité",
         de: "Düsternis",
         es: "Oscuridad",
         it: "Oscurità",
         pt: "Melancolia",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Strange Powder",
            ja: "奇妙な粉",
            fr: "Poudre étrange",
            de: "Seltsames Pulver",
            es: "Polvo extraño",
            it: "Strana polvere",
            pt: "Pó estranho",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused; if tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus; Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt verwirrt; Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido; Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso; Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso; Se as caudas, o pokemon defensor agora está dormindo.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Sticky Nectar",
            ja: "粘着性の蜜",
            fr: "Nectar collant",
            de: "Klebriger Nektar",
            es: "Néctar pegajoso",
            it: "Nettare appiccicoso",
            pt: "Néctar pegajoso",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and, until the end of your opponent's next turn, as long as Gloom is your Active Pokemon, the Defending Pokemon can't retreat, and if the effect of an attack, Pokemon Power, or Trainer card would change that player's Active Pokemon, that part of the effect does nothing. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを加え、相手の次のターンの終わりまで、暗闇があなたのアクティブなポケモンである限り、防御するポケモンは退却できません。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dommages supplémentaires et, jusqu'à la fin du prochain virage de votre adversaire, tant que la morosité est votre Pokémon actif, le Pokémon en défense ne peut pas se retirer, et si l'effet d'une attaque, d'une puissance de pokemon ou d'une carte d'entraîneur changerait le pokemon actif de ce joueur, cette partie de l'effet ne fait rien. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, dieser Angriff 20 Schaden zu plus 10 weitere Schäden verursacht, und bis zum Ende der nächsten Runde Ihres Gegners, solange die Dunkelheit Ihr aktives Pokémon ist, kann sich das verteidigende Pokémon nicht zurückziehen, und wenn der Effekt eines Angriffs, Pokemon -Powers oder Trainerkarte den aktiven Pokemon dieses Spielers verändert, tut dieser Teil des Effekts nichts. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 20 daños más 10 daños más y, hasta el final del próximo turno de tu oponente, siempre y cuando la tristeza sea tu Pokémon activo, el Pokémon defensor no puede retirarse, y si el efecto de un ataque, Pokemon Power o Trainer Card cambiaría el Pokémon activo de ese jugador, esa parte del efecto no hace nada. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 10 danni e, fino alla fine del prossimo turno del tuo avversario, a condizione che l'oscurità sia il tuo Pokemon attivo, il Pokemon in difesa non può ritirarsi e se l'effetto di un attacco, un potere Pokemon o una carta dell'allenatore cambierebbe il Pokemon attivo di quel giocatore, quella parte dell'effetto non fa nulla. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos e, até o final do próximo turno do seu oponente, desde que a tristeza seja o seu Pokémon ativo, o Pokemon defensor não poderá recuar e, se o efeito de um ataque, poder de Pokemon ou cartão de treinador mudaria esse Pokémon ativo do jogador, essa parte do efeito não faz nada. Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
