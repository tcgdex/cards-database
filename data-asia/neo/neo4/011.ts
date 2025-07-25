import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Ariados",
         ja: "ダークアリアドス",
         fr: "Ariados sombre",
         de: "Dunkle Ariados",
         es: "Ariados oscuros",
         it: "Ariados scuro",
         pt: "ARIADOS DARK",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [168],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Entangle",
            ja: "絡み合っています",
            fr: "Emmêler",
            de: "Verwickeln",
            es: "Enredar",
            it: "Entogle",
            pt: "Empréstimo",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon, then flip a coin. If heads, the new Defending Pokemon is now Paralyzed.",
            ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えてから、コインをひっくり返します。頭の場合、新しい防御ポケモンが麻痺しています。",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et changez-le avec le Pokémon en défense, puis retournez une pièce. Si les têtes, le nouveau Pokémon défendant est maintenant paralysé.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon, dann drehen Sie eine Münze. Wenn Sie Köpfe haben, ist das neue Verteidigungs -Pokémon jetzt gelähmt.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor, luego voltea una moneda. Si se dirige, el nuevo Pokémon defensor ahora está paralizado.",
            it: "Se il tuo avversario ha qualche Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa, quindi lancia una moneta. Se la testa, il nuovo Pokemon in carica è ora paralizzato.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e trocá -lo com o Pokemon defensor e vire uma moeda. Se as cabeças, o novo Pokemon definente está agora paralisado.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Poison Bind",
            ja: "毒バインド",
            fr: "Liaison du poison",
            de: "Giftbindung",
            es: "Atención venenosa",
            it: "Legame veleno",
            pt: "Poison Bind",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Flip a coin. If heads, the Defending Pokemon can't retreat until the end of your opponent's next turn and if the effect of an attack, Pokemon Power, or Trainer card would change that player's Active Pokemon, that part of the effect does nothing.",
            ja: "防御ポケモンは現在中毒になっています。コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターンの終わりまで退却できず、攻撃、ポケモンパワー、またはトレーナーカードの効果がそのプレーヤーのアクティブなポケモンを変更する場合、その効果の一部は何もしません。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire et si l'effet d'une attaque, d'une puissance de pokemon ou d'une carte d'entraîneur changerait le pokemon actif de ce joueur, cette partie de l'effet ne fait rien.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Eine Münze drehen. Wenn sich das verteidigende Pokemon erst am Ende der nächsten Runde Ihres Gegners zurückziehen und wenn die Auswirkung eines Angriffs, einer Pokemon -Leistung oder der Trainerkarte das aktive Pokemon dieses Spielers ändern würde, tut dieser Teil des Effekts nichts.",
            es: "El Pokémon defensor ahora está envenenado. Voltea una moneda. Si se dirige, el Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente y si el efecto de un ataque, Pokémon Power o Trainer Card cambiaría el Pokémon activo de ese jugador, esa parte del efecto no hace nada.",
            it: "Il Pokemon in carica è ora avvelenato. Capovolgi una moneta. Se le teste, il Pokemon in carica non può ritirarsi fino alla fine del prossimo turno del tuo avversario e se l'effetto di un attacco, un potere Pokemon o una carta dell'allenatore cambierebbe il Pokemon attivo di quel giocatore, quella parte dell'effetto non fa nulla.",
            pt: "O Pokémon atual agora está envenenado. Vire uma moeda. Se as cabeças, o Pokémon atual não poderá recuar até o final do próximo turno do seu oponente e se o efeito de um ataque de ataque, Pokemon Power ou treinador mudaria o Pokémon ativo do jogador, essa parte do efeito não fizer nada.",
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
