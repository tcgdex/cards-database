import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu",
         ja: "xatu",
         fr: "Xatu",
         de: "Xatu",
         es: "Xatu",
         it: "Xatu",
         pt: "Xatu",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Mirror Coat",
            ja: "ミラーコート",
            fr: "Manteau miroir",
            de: "Spiegelmantel",
            es: "Espejo",
            it: "Cappotto a specchio",
            pt: "Casaco espelhado",
          },
          effect: {
            en: "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking PokÃ©mon is now affected by the same Special Conditions (1 if there is only 1).",
            ja: "Xatuが対戦相手の攻撃によって焼かれたり毒されたりした場合（Xatuがノックアウトされたとしても）、攻撃するポカモンは同じ特別な条件の影響を受けます（1が1つしかない場合）。",
            fr: "Si Xatu est brûlé ou empoisonné par l'attaque d'un adversaire (même si Xatu est éliminé), le poké attaquant est désormais affecté par les mêmes conditions spéciales (1 s'il n'y en a que 1).",
            de: "Wenn Xatu durch den Angriff eines Gegners verbrannt oder vergiftet wird (auch wenn Xatu ausgeschaltet wird), wird der angreifende Poké Mon Mon von denselben besonderen Bedingungen betroffen (1, wenn es nur 1 gibt).",
            es: "Si Xatu es quemado o envenenado por el ataque de un oponente (incluso si Xatu es noqueado), el Poké Mon atacante ahora se ve afectado por las mismas condiciones especiales (1 si solo hay 1).",
            it: "Se Xatu viene bruciato o avvelenato dall'attacco di un avversario (anche se Xatu viene eliminato), l'attacco di Poké Mon è ora influenzato dalle stesse condizioni speciali (1 se c'è solo 1).",
            pt: "Se Xatu for queimado ou envenenado pelo ataque de um oponente (mesmo que Xatu seja nocauteado), o Poké -Mon atacante agora é afetado pelas mesmas condições especiais (1 se houver apenas 1).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dazzle Dance",
            ja: "まばゆいばかりのダンス",
            fr: "Danse éblouissante",
            de: "Dazzle Tanz",
            es: "Baile deslumbrante",
            it: "Danza dazzera",
            pt: "Dazzle Dance",
          },
          effect: {
            en: "Each Defending Pokemon is now Confused.",
            ja: "防御するポケモンはそれぞれ混乱しています。",
            fr: "Chaque Pokémon défendant est maintenant confus.",
            de: "Jedes verteidigende Pokemon ist jetzt verwirrt.",
            es: "Cada Pokémon defensor ahora está confundido.",
            it: "Ogni Pokemon in difesa è ora confuso.",
            pt: "Cada Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Psyloop",
            ja: "ピループ",
            fr: "Psyloop",
            de: "Psyloop",
            es: "Psyloop",
            it: "Psyloop",
            pt: "Psyloop",
          },
          effect: {
            en: "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play.",
            ja: "30のダメージに加えて、対戦相手がプレイしているトレーナーカードごとに30ダメージを与えます。",
            fr: "Fait 30 dégâts plus 30 dégâts supplémentaires pour chaque carte d'entraînement que votre adversaire a en jeu.",
            de: "Fügt 30 Schäden plus 30 weitere Schäden für jede Trainerkarte, die Ihr Gegner im Spiel hat.",
            es: "Hace 30 daños más 30 más de daño para cada carta de entrenador que tu oponente tiene en juego.",
            it: "Fa 30 danni più 30 danni in più per ogni carta dell'allenatore che il tuo avversario ha in gioco.",
            pt: "30 danos mais mais 30 danos para cada cartão de treinador que seu oponente tem em jogo.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
