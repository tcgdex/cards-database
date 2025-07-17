import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Wobbuffet",
         ja: "ウォブバフェット",
         fr: "Wobbuffet",
         de: "Wobbuffet",
         es: "Wobbuffet",
         it: "Wobbuffet",
         pt: "Wobbuffet",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [202],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

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
            en: "If Wobbuffet becomes Poisoned or Burned by the Defending Pokmon's attack during your opponent's turn, the Defending Pokmon becomes affected by the same Special Condition.",
            ja: "Wobbuffetが敵の順番中に防御するPokmonの攻撃によって毒されたり燃やされたりすると、Pokmonは同じ特別な状態の影響を受けます。",
            fr: "Si Wobbuffet devient empoisonné ou brûlé par l'attaque de Pokmon en défense au tour de votre adversaire, le Pokmon en défense est affecté par la même condition spéciale.",
            de: "Wenn Wobbuffet durch den Angriff des verteidigenden Pokmon während des an der Reihe seines Gegners vergiftet oder verbrannt wird, wird das verteidigende Pokmon von derselben besonderen Erkrankung beeinflusst.",
            es: "Si Wobbuffet se envenena o quema por el ataque de Pokmon defensor durante el turno de tu oponente, el Pokmon defensor se ve afectado por la misma condición especial.",
            it: "Se Wobbuffet viene avvelenato o bruciato dall'attacco di Pokmon in carica durante il turno del tuo avversario, il Pokmon in carica viene influenzato dalla stessa condizione speciale.",
            pt: "Se Wobbuffet ficar envenenado ou queimado pelo ataque de Pokmon em defesa durante a vez do seu oponente, o Pokmon defensor será afetado pela mesma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Return Attack",
            ja: "攻撃を返す",
            fr: "Attaque de retour",
            de: "Return Attack",
            es: "Regreso",
            it: "Attacco di ritorno",
            pt: "Ataque de retorno",
          },
          effect: {
            en: "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.",
            ja: "2つのコインをフリップします。どちらかがヘッドである場合、この攻撃はWobbuffetのダメージ数の数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Si l'un ou l'autre est des têtes, cette attaque fait 10 dégâts le nombre de compteurs de dégâts sur Wobbuffet.",
            de: "2 Münzen umdrehen. Wenn eines der Köpfe sind, verursacht dieser Angriff 10 Schadenszeiten der Anzahl der Schadensunterschiede auf Wobbuffet.",
            es: "Flip 2 monedas. Si cualquiera de los dos es la cabeza, este ataque hace 10 veces el número de contadores de daño en Wobbuffet.",
            it: "Flip 2 monete. Se uno è la testa, questo attacco fa 10 danni volte il numero di contatori di danno su Wobbuffet.",
            pt: "Flip 2 moedas. Se ambos são cabeças, esse ataque causará 10 danos às vezes o número de contadores de danos no WobBuffet.",
          },
        },
      ],

      retreat: 2,

};
